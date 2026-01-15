class Student {
    constructor(name , age , major) {
        this.name= name
        this.age= age
        this.major= major
    }

    introduce() {
       return `my name is  ${this.name} im ${this.age} and my major  is ${this.major}`
    }
}

let student1 = new Student("yahya" , 9 , "math")
console.log(student1.introduce()) 



let student2 = new Student("omar" , 9 , "math")
console.log(student2.introduce()) 






// Exercise 2 – Classes and Instances

// Create a Person class with:

// a constructor that takes name and email
// a method introduce().


// Create two instances of the Person class.
// Call the introduce() method for each instance.

// Exercise 3 – Inheritance

// Create an Employee class that inherits from the Person class.
// Add to the Employee class:

// a property position
// a method displayPosition().


// Create an instance of Employee and display its introduction and position.