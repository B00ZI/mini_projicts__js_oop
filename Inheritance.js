class Person{

    constructor(name , email){

        this.name=name
        this.email=email
    }

    introduce(){
        return `name : ${this.name}  email : ${this.email}`
    }
    
}





class Employee extends Person {
    
  constructor(name , email ,  position){
    
    super(name , email)
    this.position = position

  }
  displayPosition(){
      return 'position is : ' + this.position
  }
     
}


const employee1 = new  Employee("hel" , "amailof me" , "CEO") 
console.log(employee1.displayPosition())
console.log(employee1.introduce())


const employee2 =  new Employee("cee")
console.log(employee2.displayPosition())
console.log(employee2.introduce())
