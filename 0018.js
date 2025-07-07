let categories = [
  {
    category: "Fiction",
    books: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "1984", author: "George Orwell" },
    ],
  },
  {
    category: "Non-Fiction",
    books: [
      { title: "Sapiens", author: "Yuval Noah Harari" },
      { title: "Educated", author: "Tara Westover" },
    ],
  },
];

let res = categories.map(item => item.books);
console.log(res.flat())
