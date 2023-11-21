// Dynamic nature of an obejct
/*let person ={
    firstName = 'John'
    lastName = 'Peter'
}
// creating a new value
console.log(person);
person.firstname = "Bruce"
console.log(person)
// added new property to the current object
person.age = 20*/
// constructor property is the same at instance of
/*function newRecord(name){
    this.name = name
}
let person1 = new NewRecord('John');
let person2 = {name : 'Henk'};
//console.log(person2);
// constructor property
console.log(person1.constructor === NewRecord);// true
// it is the same as using instance of
console.log(person1 instanceof NewRecord);//true
// console.log(person2.constructor == NewRecord); // false
}*/
//Functions are object
/*let person = {
    firstName: 'John',
    lastName: 'Bruce',
    fullName: function(){           // using a method / function
        return `${this.firstName} ${this.firstName}`        // Make use of 'this'- refers to the current object ---specificity --- this is a constructor function
    }
}
console.log(person);
console.log(person.fullName());*/
/*let person = {
    firstName: 'Sarah',
    lastName: 'Bruce',
    hrs: 120,
    rate: 500,
    salary: function() {
        return this.hrs * this.rate       // return - holds the value for you
    }
}
console.log(person);               // dot notation - if you want to see the properties of u=your object and you can use the square brackets as well
console.log(person.salary());      // the console - displays the value on your console
//person.salary()*/
// Looping through an object
/*let laptop = {
    make:'Dell',
    cpu: '3Ghz',
    ram: '16GB'
}
// displaying just the values
console.log(laptop);
for (const keyName in laptop);
console.log(laptop[key])
// another way to display all the values and keys
console.log(Object.keys(laptop));
console.log(Object.values(laptop));
// another way to display the values
Objects.value(laptop).forEach( (key)=>{
    console.log(`${key} -> ${laptop[key]}`);
})
Objects.value(laptop).forEach( (value)=>{
    console.log(`${value}`);
})
for (let key in laptop){       // defining a variable and
    console.log(key, ' ', laptop[key]);   //
}*/
// Cloning an Object using (spead op, Object.assign(), JSON.parse(),)
/*let car1 = {
    make: 'Toyota',
    year: 2023
}
let car2 = car1         // share the same memory location "2 is the copy'cat' of 1" (=)- is also copying the reference
console.log("==car1==");
console.log(car1);
console.log("==car2==");
console.log(car2);
console.log("change the value of car2");
car2.year = 2024
console.log(car1,car2);
// spread operator --- 3 dot followed by the object -- spreads accesses one property at a time -- only copying the property and value
let car2 = { ...car1}
console.log(car1, car2);
console.log("Change the value of car2");
car2.year = 2024
console.log(car1, car2);
//Object.assign() -- what data type we're working with
let car3 = Object.assign({}, car1)
console.log("===car3===");
console.log(car3);
let car4 = JSON.parse(Jsoon.stringify(car1))
console.log("car4");
console.log(car4)
//
let numbers = [2, 4, 11, 1]
let a = 3
let b = 2
console.log(`Highest number: ${Math.max(...numbers)}`);  // captures the highest value
console.log(`Lowest number: ${Math.min(...numbers)}`);   // displays the minimum value
// 3^2 = 3 * 3
console.log(`pow(x,y): ${Math.pow(a, b)}`);  // exponetial
console.dir(Math);
*/
// String method
let firstName = 'Ntokozo'
//console.log(firstName.split("").reverse().join(""));       // reversed the Ntokozo around
///Exercises on the below methods
//- charAt()  --Returns the character at a specified index (position)
//console.log(firstName.charAt())
//- endsWith() -- Returns if a string ends with a specified value
//console.log(firstName.endsWith())      //--- returns a boolean
//- includes() -- Returns if a string contains a specified value
console.log(firstName.includes())
/*- lastIndexOf()
- indexOf()
- replace()
- repeat()
- startWith()
- subString()
- trim()
- trimEnd()
- trimStart()
- slice()
- split()
*/
// how to create a random number
let rIdx = Math.floor(Math.random)
console.log(numbers);
console.log(rIdx)
console.log(number)
// map and reduce
console.log(modify);
let sum = numbers.reduce((a, b)=> a + b)
console.log(sum);
//
Collapse
















