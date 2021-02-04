// let juice = ["banana", "apple", "mango"];

// let [banana, ...juices] = juice;

// juice = [...juice, "gon"];

// let gon = {
//   name: "gon",
//   age: "21",
//   photo: [1, 2, 3, 4, 5, 6],
// };

// let { photo } = gon;
// console.log(photo);

// IFFE

// (function hello(name) {
//   console.log("hello " + name);
// })("Dong gon");

// Closures

function user() {
  const name = "gon";
  const displayName = function (greeting) {
    console.log(greeting + name);
  };
  return displayName;
}

const say = user();

say("hello");
