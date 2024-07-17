function n() {
  let x = (/* @__PURE__ */ new Date()).getTime(), e = performance && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    let t = Math.random() * 16;
    return x > 0 ? (t = (x + t) % 16 | 0, x = Math.floor(x / 16)) : (t = (e + t) % 16 | 0, e = Math.floor(e / 16)), (r === "x" ? t : t & 3 | 8).toString(16);
  });
}
function o(x) {
  if (x && x > 0) {
    const e = [];
    for (let r = 0; r < x; r++)
      e.push(n());
    return e;
  }
}
export {
  o as generateUUID
};
