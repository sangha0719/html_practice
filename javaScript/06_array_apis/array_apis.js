// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.join());
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  console.log(fruits.split(","));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const new_array = array.slice(2);
  console.log(new_array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const found = students.find((Student) => Student.score === 90);
  console.log(found);
}

// Q6. make an array of enrolled students
{
  const enrolled_students = students.filter(
    (enrolled_student) => enrolled_student.enrolled == true
  );
  console.log(enrolled_students);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const score = students.map((student) => student.score);
  console.log(score);
}

// Q8. check if there is a student with the score lower than 50
// 50점 미만의 학생이 있는가?
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // const result2 = students.every((student) => student.score < 50);
  // console.log(result2);
  // every의 경우는 모두 만족해야 한다.
}
console.clear();
// Q9. compute students' average score
{
  const average_score = students.reduce((prev, curr) => {
    console.log("-------------");
    console.log(prev);
    console.log(curr);
    return curr;
  });
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
