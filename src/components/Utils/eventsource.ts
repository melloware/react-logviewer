import { List } from "immutable";
import mitt from "mitt";

import { EventSourceOptions } from "../LazyLog";
import { encode } from "./encoding";
import { bufferConcat, convertBufferToLines } from "./utils";

export default (url: string | URL, options: EventSourceOptions) => {
    const { withCredentials, onOpen, onClose, onError, formatMessage } =
        options;
    const emitter = mitt();
    let encodedLog = new Uint8Array();
    let overage: any = null;

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
            // Create EventSource - it will handle reconnection automatically
            const eventSource = new EventSource(url, { withCredentials });

            eventSource.addEventListener("open", (e) => {
                // relay on open events if a handler is registered
                onOpen && onOpen(e, eventSource);
            });

            // Note: EventSource API doesn't have a 'close' event in the spec
            // This listener will never fire, but we keep it for backwards compatibility
            // in case any code depends on the onClose callback
            eventSource.addEventListener("close", (e) => {
                onClose && onClose(e);
            });

            eventSource.addEventListener("error", (err) => {
                onError && onError(err);
                // EventSource will automatically reconnect after ~3 seconds
                // unless options.reconnect is false.
                //
                // EventSource will also not reconnect if the server sends a
                // 204 No Content response.
                if (options.reconnect === false) {
                    eventSource.close();
                }
            });

            eventSource.addEventListener("message", (e) => {
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
                // Close the EventSource when component unmounts
                eventSource.close();
            });
        } catch (err) {
            emitter.emit("error", err);
        }
    });

    return emitter;
};
