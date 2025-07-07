let characters = [
  {
    name: "Alice",
    age: 25,
    gender: "Female",
    height_cm: 168,
    city: "New York",
  },
  {
    name: "Bob",
    age: 30,
    gender: "Male",
    height_cm: 183,
    city: "Los Angeles",
  },
  {
    name: "Charlie",
    age: 35,
    gender: "Male",
    height_cm: 178,
    city: "Chicago",
  },
  {
    name: "Diana",
    age: 28,
    gender: "Female",
    height_cm: 162,
    city: "Houston",
  },
  {
    name: "Eva",
    age: 22,
    gender: "Female",
    height_cm: 173,
    city: "Miami",
  },
];
//get all males obj
let getmale = characters.filter((item) => item.gender == "Male");
console.log(getmale);


//getallnames
let getallnames = characters.map(item => item.name)
console.log(getallnames);

//get name and height
const getnameandheight = characters.map((data) => ({
    Name: data.name,
    height:data.height_cm
}))
console.log(getnameandheight);

//getage with greater than 30

const getage = characters.map(item => item.age)
console.log(getage);
const greater = getage.filter(item => item > 30);
console.log(greater)

//or

const getage30 = characters.filter(item => item.age > 30);
console.log(getage30);


//total height of all the persons

const totalheight = characters.reduce((sum, acc) => acc.height_cm + sum, 0);
console.log(totalheight)


//get total number of character of names

const totalnoofnames = characters.reduce((sum, acc) => acc.name.length + sum, 0);
console.log(totalnoofnames)


//to check all the age greater than 30

const checkage = characters.every(item => item.age > 30);
console.log(checkage)

//atlease one person age greater then 30

const checkagesome = characters.some(item => item.age > 30);
console.log(checkagesome);

//is every gender male

const checkgender = characters.every((item) => item.gender == "Male");
console.log(checkgender);

//atleease meale character

const checkgenderatleaset = characters.some((item) => item.gender == "Male");
console.log(checkgenderatleaset);


//sort by age

const sortbyage = characters.sort((a, b) => a.age - b.age);
console.log(sortbyage)

//sort by name

const sortbyname = characters.sort((a, b) => a.name - b.name);
console.log(sortbyname);
