declare class Person {
    Id: string;
    Name: string;
    Email: string;
    Birthdate: string;
    Telephone: string;
    constructor(name: string, email: string, birthdate: string, telephone: string);
    toString: () => string;
}
export default Person;
