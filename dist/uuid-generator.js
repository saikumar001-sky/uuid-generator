function n() {
  let e = (/* @__PURE__ */ new Date()).getTime(), x = performance && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    let t = Math.random() * 16;
    return e > 0 ? (t = (e + t) % 16 | 0, e = Math.floor(e / 16)) : (t = (x + t) % 16 | 0, x = Math.floor(x / 16)), (r === "x" ? t : t & 3 | 8).toString(16);
  });
}
function o(e) {
  if (e && e > 0) {
    const x = [];
    for (let r = 0; r < e; r++)
      x.push(n());
    return x;
  } else {
    const x = [];
    return x.push(n()), x;
  }
}
export {
  o as generateUUID
};
