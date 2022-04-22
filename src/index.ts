'strict mode'

import Person from './person';

let MyName: string = "Alex Rocha";
let num: number = 4.4;
let factor: number = 2;

console.debug(`Hello World : ${MyName}`);

const SumNumbers = (num: number, num2: number): number => num + num2;

const SubNumbers = (num: number, num2: number): number => num - num2;

const MultNumbers = (num: number, num2: number): number => num * 2;

const DivNumbers = (num: number, factor: number): number => num / factor;

const Display = (data: string): void => console.debug(`Resultado do calculo: ${data}`);

Display(SumNumbers(num, factor).toString());
Display(DivNumbers(num, factor).toString());


class Sale {
    public Id: string = '';
    public ProductName: string = '';
    public Price: number = 0;
    public User: string = '';

    /**     * Constructor from Sale class */
    constructor(productName: string, price: number, user: string = '') {
        this.Id = 's8d9hasdshduai';
        this.ProductName = productName;
        this.Price = price;
        this.User = user ?? 'Not user';
    }

    public toString = () => `Sale Information: Id: ${this.Id} - Product Name: 
    ${this.ProductName} - Price: ${this.Price} ${this.User == 'Not user' ? '' : `Username: ${this.User}`}`;
}

let sale: Sale = new Sale('Milk Bottle', 4.57);
console.debug(sale.toString())



// let calculateFees = (month: number, price: number): string => month >= 0 && month <= 11 ?
//     (price * (1 + 0.05) ** month).toFixed(2).toString() : 'Mês Inválido';

function calculateFees(month: number, price: number): string {
    let result: string = '';

    if (month >= 0 && month <= 11) {
        let calculateResult: number = (price * ((1 + 0.05) ** month));
        result = calculateResult.toFixed(2).toString()
    } else {
        result = 'Mês Inválido'
    }

    return result;
}

let displayResult = (result: string) => console.debug(`\nResultado do calculo: ${result}`);

displayResult(calculateFees(4, 75.68));

let employeed: Person = new Person('Alex Julio Lacerda Rocha', 'alrocha003@gmail.com', '18/04/1991','(11)98312-0982');

console.debug(employeed.toString());