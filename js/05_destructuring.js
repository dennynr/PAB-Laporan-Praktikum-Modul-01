console.log("------ Destructuring ------");

let items = ["Table", "Handphone", "Computer"];

let item1 = items[0];
let item2 = items[1];
let item3 = items[2];

console.log(item1);
console.log(item2);
console.log(item3);

//Destructuring

let [item_1, item_2, item_3] = items;

console.log(item_1);
console.log(item_2);
console.log(item_3);

//Object 
let student =  {
    name: "Ahmad",
    age: 22,
    departement : "Information Systems"
}

// Manual Variable Declaration
let studentName = student.name;
let studentAge = student.age;
let studentDepartement = student.departement;

console.log(studentName);
console.log(studentAge);
console.log(studentDepartement);

