const nums = [1, 2, 3, 4, 5];
// MAP
const newNum = nums.map((num) => num * 2);

//FIND return the first element
const searchNum = nums.find((num) => num % 2 === 0);

//FILTER return all element
const oddNum = nums.filter((num) => num % 2 === 0);

// SOME and EVERY
// TERNARY OPERATOR
1 < 2 ? 1 : 2;

//SORT
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 72, 31, 46, 43, 74];

items.sort();
console.log(items);

ratings.sort((a, b) => a - b);
console.log(ratings);
