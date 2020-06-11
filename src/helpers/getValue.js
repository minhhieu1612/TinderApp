export default function (obj, key, defaultValue = '') {
  return obj && obj[key] ? obj[key] : defaultValue;
}
