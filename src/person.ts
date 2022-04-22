

class Person {
    public Id: string;
    public Name: string;
    public Email: string;
    public Birthdate: string;
    public Telephone: string;

    constructor(name: string, email: string, birthdate: string, telephone: string) {
        this.Id = 'dhosaij342';
        this.Name = name;
        this.Email = email;
        this.Birthdate = birthdate;
        this.Telephone = telephone;
    }

    public toString = (): string => `Id: ${this.Id} - Name: ${this.Name} - Email: ${this.Email}
        - Birthdate: ${this.Birthdate} - Telephone: ${this.Telephone}`;
    
}

export default Person;