var evens = [1, 2, 3, 4, 5, 6];

odds = evens.map(v => v + 1) // this works because v + 1 increments v.
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

console.log(odds);
//console.log(pairs);
//console.log(nums);
