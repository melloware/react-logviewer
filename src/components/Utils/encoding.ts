export const encode = (value: string | undefined) =>
    new TextEncoder().encode(value);
export const decode = (value: BufferSource | any) => {
    if (!ArrayBuffer.isView(value)) {
        value = new Uint8Array([value]);
    }
    return new TextDecoder("utf-8").decode(value);
};
