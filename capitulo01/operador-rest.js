const rest = (x, y, ...a) => (x + y) * a.length;

console.log(rest(1, 2, "hello", true, 7));