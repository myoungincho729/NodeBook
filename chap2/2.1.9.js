// map, set
const m = new Map();

m.set("a", "b");
m.set(3, "c");
const d = {};
m.set(d, "e");

console.log(m.get(d));
console.log(m.size);

for (const [k, v] of m) {
  console.log(`${k}: ${v}`);
}

console.log(m.has(3));
m.delete(33);
console.log(m.size);
m.clear();
console.log(m.size);

const s = new Set();
s.add(false);
s.add(1);
s.add("1");
s.add(1);

console.log(s.size);
console.log(s.has(1));

for (const v of s) {
  console.log(v);
}

s.delete(1);
s.clear();

const arr = [1, 2, 2, 3, 3, 3];
const st = new Set(arr);
console.log(st);
const result = Array.from(st);
console.log(result);
