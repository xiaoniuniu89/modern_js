// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// const funcUser1 = new User('daniel', 'dan@mail.com');
// // console.log(funcUser1);

// User.prototype.login = function() {
//     console.log(`${this.username} has logged in`);
//     return this;
// }

// User.prototype.logout = function(){
//     console.log(`${this.username} has logged out`);
//     return this;
// }

// // funcUser1.login().logout();

// function Admin(username, email, title){
//     User.call(this, username, email);
//     this.title = title;
// }



// Admin.prototype = Object.create(User.prototype);


// Admin.prototype.boast = function(){
//     console.log(`${this.title}`)
//     return this
// }

// // console.log(Admin.prototype)
// const funcAdmin = new Admin('admin', 'admin@admin.com', 'Da Big Boss');

// funcAdmin.login()

// console.log(funcAdmin);

// funcAdmin.login().boast().logout()

class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
}

User.prototype.login = function(){
    console.log(`${this.username} has just logged in`)
    return this
}
User.prototype.logout = function(){
    console.log(`${this.username} has just logged out`)
    return this
}

const myUser = new User('daniel', 'dan@mail.com');

myUser.login().logout()

class Admin extends User {
    constructor(username, email, title){
        super(username, email)
        this.title = title
    }
}

Admin.prototype.boast = function(){
    console.log(`${this.title}`)
    return this
}

const admin = new Admin('admin', 'add@min.com', 'Da Big Boss')

admin.login().boast().logout()