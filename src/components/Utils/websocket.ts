import { List } from "immutable";
import mitt from "mitt";

import { WebsocketOptions } from "../LazyLog";
import { encode } from "./encoding";
import { bufferConcat, convertBufferToLines } from "./utils";

export default (url: string | URL, options: WebsocketOptions) => {
    const { onOpen, onClose, onError, formatMessage, protocols } = options;
    const emitter = mitt();
    let encodedLog = new Uint8Array();
    let overage: any = null;
    let aborted: boolean = false;

    emitter.on("data", (data) => {
        encodedLog = bufferConcat(
            encodedLog,
            encode(data as unknown as string)
        );

        const { lines, remaining } = convertBufferToLines(
            encode(data as unknown as string),
            overage
        );

        overage = remaining;

        emitter.emit("update", { lines, encodedLog });
    });

    emitter.on("done", () => {
        if (overage) {
            emitter.emit("update", { lines: List.of(overage), encodedLog });
        }

        emitter.emit("end", encodedLog);
    });

    emitter.on("start", () => {
        try {
            // try to connect to websocket
            const socket = new WebSocket(url, protocols);

            socket.addEventListener("open", (e) => {
                // relay on open events if a handler is registered
                onOpen && onOpen(e, socket);
            });
            socket.addEventListener("close", (e) => {
                onClose && onClose(e);
                if(!aborted && options.reconnect) {
                    const timeout = options.reconnectWait ?? 1;
                    setTimeout(() => emitter.emit("start"), timeout*1000);
                }
            });

            socket.addEventListener("error", (err) => {
                onError && onError(err);
            });

            socket.addEventListener("message", (e) => {
                let msg = formatMessage ? formatMessage(e.data) : e.data;

                if (typeof msg !== "string") {
                    return;
                }
                // add a new line character between each message if one doesn't exist.
                // this allows our search index to properly distinguish new lines.
                msg = msg.endsWith("\n") ? msg : `${msg}\n`;

                emitter.emit("data", msg);
            });

            emitter.on("abort", () => {
                aborted = true;
                socket.close()
            });
        } catch (err) {
            emitter.emit("error", err);
        }
    });

    return emitter;
};
