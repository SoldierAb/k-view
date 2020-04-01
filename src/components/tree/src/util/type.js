export default (obj, type) =>
Object.prototype.toString.call(obj).includes(`${type.slice(1)}`);