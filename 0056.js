const original = {
    name: "Alice",
    address:
    {
        city: "Paris"
    }
};

const res1 = structuredClone(original)
res1.address="kannan"
console.log(res1);
console.log(original);


