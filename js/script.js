let accountName = document.querySelector(".name-input");
let role = document.querySelector(".status-input");

let loginButton = document.querySelector(".login");
let users = ["Slava"];
let admins = ["Petro"];

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.loggedIn = false;
        if (this.role !== "admin" && this.role !== "user") {
            alert("Не корректно введена роль! Проверьте ввод роли");
            return;
        }

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
        alert(`Админ: ${name} добавлен`);

    }

    removeUser(name) {
        this.name = name;
        users.remove(name);
        alert(`Юзер: ${name} удален`);

    }

    changeUserRole(newRole) {
        if (this.role !== "admin" || this.role !== "user") {
            alert("Не корректно введена роль! Проверьте ввод роли");
            return;
        } else {
            this.role = newRole;
        }
    }

    getAllUSers() {
        console.log(users);
    }

    removeAllUsers() {
        users = [];
        alert("Список юзеров очищен");
    }
}

loginButton.addEventListener("click", function () {


    let accNameValue = accountName.value;
    let roleValue = role.value;

    console.log(accNameValue);
    console.log(roleValue);


    let form = new User(accNameValue, roleValue);

    function checRole() {
        if (role.value == "admin" && admins.includes(accountName.value)) {
            alert(`Добро пожаловать, дорогой Админ!`);
        } else if (role.value == "user" && users.includes(accountName.value)) {
            alert(`Здраствуйте ${accountName.value}!`);
        } else {
            alert("")
        }
    }
    checRole();
});