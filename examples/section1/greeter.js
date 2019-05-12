var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Kingsley',
    lastName: 'May'
};
console.log(greeter(user));
var user2 = new User('Kingsley', 'May');
console.log(greeter(user2));
