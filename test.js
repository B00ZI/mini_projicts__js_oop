
class User{
 
    constructor( id , name , role){

        this.id = id 
        this.name = name
        this.role = role
    }
    
    display(){
        return(

            "user id : " + this.id +
            "\nuser name : " + this.name +
            "\nuser role : " + this.role

        )
    }
}



// const user =  new User(1 , "yahya" , "admine")
// console.log(user.display())


class Manager{

    #users = []
    
    addUser(user){
        
     this.#users.push(user)  

    }
    
    show(){
        return this.#users
    }

}


let x = new Manager()
let user1 = new User(4,"yonm","omo")
let user2 = new User(3,"dfasd","asdf")
let user3 = new User(5,"ssw","omsdfo")
x.addUser(user1)
x.addUser(user2)
x.addUser(user3)


console.log( x.show())


// Mini-Project – User Management

// Create a User class containing:

// name
// role
// a method display().


// Create a Manager class that manages a list of users.
// Add a method addUser().
// Display the user list in an HTML page.
// Highlight users with the Admin role.

// Bonus Questions

// Add functionality to delete a user.
// Save the user list to localStorage.
// Display the total number of users and administrators.
// Claude is AI and can make mistakes. Please double-check responses.