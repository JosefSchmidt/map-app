export default function (location) {
  if (location[2] === ".") return location;
  return location.slice(0, 2) + "." + location.slice(2);
}
