class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
    walk(){
        console.log(`${this.name} is walking.`);
    }
}

class Student  extends Person{
    constructor(name, age, roll, marks){
        super(name, age);
        this.roll = roll;
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, tId, course, skills){
        super(name, age);
        this.skills = skills;
        this.tId = tId;
        this.course = course;
    }
}

let t1 = new Teacher("John", 38, "0985", "English", "Talking");
let s1 = new Student("Jaggu", 18, 302, 400);
let p1 = new Person("Indraverma", 51);

console.log(t1);
console.log(s1);
console.log(p1);

p1.talk();
t1.talk();
s1.walk();


