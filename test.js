class User {
  constructor( name, role) {
    
    this.name = name;
    this.role = role;
  }

  display() {
    return (
    
      "user name : " +
      this.name +
      "\nuser role : " +
      this.role
    );
  }
}


class Manager {
  #users = [];

  addUser(user) {
    this.#users.push(user);
  }

  show() {
    return this.#users;
  }
}

let x = new Manager();
let user1 = new User("omar", "admin");
let user2 = new User( "anas", "user");
let user3 = new User( "yahya", "user");
x.addUser(user1);
x.addUser(user2);
x.addUser(user3);

let users = x.show();

const ul = document.getElementById("ul");


for (let i = 0; i < users.length; i++) {
  const li = document.createElement("li");

   li.textContent = users[i].name + " - " + users[i].role
   if(users[i].role === "admin"){

    li.classList.add("special-user")
   }
   ul.appendChild(li)
}

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
