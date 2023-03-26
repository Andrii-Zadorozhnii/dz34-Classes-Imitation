let accountName = document.querySelector(".name-input").value;
let role = document.querySelector(".status-input").value;
let loginButton = document.querySelector(".login");
let users = [];
let admins = [];

class User {
    constructor(name, role) {
        if (this.role !== "admin" || this.role !== "user") {
            alert("Не корректно введена роль! Проверьте ввод роли");
            return;
        }
        this.name = name;
        this.role = role;
        this.loggedIn = false;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    loginStatus() {
        this.loggedIn = true;
    }

    logoutStatus() {
        this.loggedIn = false;
    }

    changeName(newName) {
        this.name = newName;
    }
    changePassword(newPassword) {
        this.password = newPassword;
    }


}


class Admin extends User {
    constructor(name, role) {
        super(name, role);
    }

    addAdmin(name) {
        this.name = name;
        this.role = role;
        admins.push(name);
    }

    removeUser(name) {
        this.name = name;
        users.remove(name);
    }

    changeUserRole(newRole) {
        if (this.role !== "admin" || this.role !== "user") {
            alert("Не корректно введена роль! Проверьте ввод роли");
            return;
        } else {
            this.role = newRole;
        }
    }

    getAllUSers(){
        console.log(users);
    }

    removeAllUsers(){
        users = [];
    }
}

let form = new Class();