import mitt from "mitt";

import { convertBufferToLines } from "./utils";

const fetcher = Promise.resolve().then(() => self.fetch);

export default (url: RequestInfo | URL, options: RequestInit) => {
    const emitter = mitt();

    emitter.on("start", async () => {
        try {
            const fetch = await fetcher;
            const response = await fetch(
                url,
                Object.assign({ credentials: "omit" }, options)
            );

            if (!response.ok) {
                const error = new Error(response.statusText);

                // @ts-ignore
                error["status"] = response.status;
                emitter.emit("error", error);

                return;
            }

            const arrayBuffer = await response.arrayBuffer();
            const encodedLog = new Uint8Array(arrayBuffer);
            const { lines } = convertBufferToLines(encodedLog);

            emitter.emit("update", {
                lines: lines,
            });
            emitter.emit("end", encodedLog);
        } catch (err) {
            emitter.emit("error", err);
        }
    });

    return emitter;
};
