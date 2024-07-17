function generateBulkUUID() {
  let d = new Date().getTime();
  let d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
export function generateUUID(number) {
  if (number && number > 0) {
    const bulkUUIDs = [];
    for (let i = 0; i < number; i++) {
      bulkUUIDs.push(generateBulkUUID());
    }
    return bulkUUIDs;
  }
}
