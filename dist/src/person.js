"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, email, birthdate, telephone) {
        this.toString = () => `Id: ${this.Id} - Name: ${this.Name} - Email: ${this.Email}
        - Birthdate: ${this.Birthdate} - Telephone: ${this.Telephone}`;
        this.Id = 'dhosaij342';
        this.Name = name;
        this.Email = email;
        this.Birthdate = birthdate;
        this.Telephone = telephone;
    }
}
exports.default = Person;
//# sourceMappingURL=person.js.map