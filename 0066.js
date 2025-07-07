const _ = require('lodash')

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 25 },
];

const groupedByAge = _.groupBy(users, "age");
console.log(groupedByAge);