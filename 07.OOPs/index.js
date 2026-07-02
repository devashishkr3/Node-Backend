function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi, My name is ${this.name}`);
};

let p1 = new Person("Adam", 22); //constructor
let p2 = new Person("Raju", 23);
let p3 = new Person("sourav", 22);
let p4 = new Person("Sachin", 22);
let p5 = new Person("Tanya", 22);

console.log(p1);
p1.talk();
p2.talk();









//factory function 
function personMaker(name, age){
    const person = {
        name : name,
        age: age,
        talk(){
            console.log(`Hello, I am ${this.name}`);
        }
    }
    return person;
}

// console.log(personMaker("Dev", 25));
// personMaker("Dev", 25).talk()

// console.log(personMaker("Rahul", 22));
// personMaker("rahul", 22).talk()