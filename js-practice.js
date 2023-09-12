/**
 * variables
 * data types
 * string interploation
 * spread operators
 * functions
 * arrow functions
 * lambda functions 
 * arrays
 * objects 
 * methods on array
 * high order array methods 
 * loop 
 * modules
 * if conditions
 * manipulating the dom - document object model
 * events and events handling 
 * classes and objects - inheritance
 */

console.log("hello world")
// using let, const and var 
var name = "Kehinde";
// document.write(name)
// data types - string, numbers 
console.log(`You are a great man ${name}`)
let name1 = "Johnson";
console.log(`The man we are talking about is ${name1}`);

// objecs
const cars = {
    carName:"mustang",
    brand:{
        maker1:"Toyota",
        maker2:"camery"
    },
    color:{
        primaryColor:"Orang",
        sedondaryColor:"Creamy"
    }
};

// You should not declare an object for an object.  
class Student{
    constructor(name, age, email){
        this.name = name 
        this.age = age 
        this.email = email 
    }

    studentProfile(){
        return `Hello ${this.name}, confirm that your age is ${this.age} and your email address is ${this.email}`;
    }
}
const student1 = new Student("John", 14, "john@gmail.com")
console.log(student1.studentProfile())
console.log(cars.carName)