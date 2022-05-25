function Student(name, gender) {
  this.name = name;
  this.gender = gender;
}
Student.prototype.age = 15;
let studentObj = new Student("shan", "f");
console.log(studentObj.age);
let studentObj2 = { ...studentObj };
Student.prototype.age = 20;
console.log(studentObj2.age);