// Sample data structure for all questions
const schoolData = [
  {
    class: "Math",
    students: [
      { name: "Alice", grade: 90, activities: ["Chess", "Debate"] },
      { name: "Bob", grade: 80, activities: ["Soccer", "Debate"] },
    ],
  },
  {
    class: "Science",
    students: [
      { name: "Charlie", grade: 85, activities: ["Chess", "Drama"] },
      { name: "Diana", grade: 95, activities: ["Soccer", "Drama"] },
    ],
  },
];

const averageGrades = schoolData.map((data) => {
  
  const totalGrades = data.students.reduce(
    (sum, student) => sum + student.grade,
    0
  );

  
  const averageGrade = totalGrades / data.students.length;

  return {
    classdata: data.class,
    averageGrade: averageGrade.toFixed(2), 
  };
});

console.log(averageGrades);

