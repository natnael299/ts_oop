const c = { rank: 1 };
const d = c;
d.rank = 2;
console.log(c, d);

function mutate(x: number, y: number) {
  x = y;
}

mutate(c.rank, 4);
