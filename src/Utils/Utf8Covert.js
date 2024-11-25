const fixEncoding = (text) => {
  const decoder = new TextDecoder("utf-8");
  const bytes = new Uint8Array(text.split("").map((char) => char.charCodeAt(0)));
  return decoder.decode(bytes);
};

export default fixEncoding;