let items = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
  { name: "spinach", category: "vegetable" },
  { name: "mango", category: "fruit" },
];

const grouped = items.reduce((acc, item) => {
  const key = item.category;
  (acc[key] = acc[key] || []).push(item.name); // push only the name
  return acc;
}, {});

console.log(grouped);
