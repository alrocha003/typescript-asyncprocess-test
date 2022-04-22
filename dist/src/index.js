'strict mode';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
let MyName = "Alex Rocha";
let num = 4.4;
let factor = 2;
console.debug(`Hello World : ${MyName}`);
const SumNumbers = (num, num2) => num + num2;
const SubNumbers = (num, num2) => num - num2;
const MultNumbers = (num, num2) => num * 2;
const DivNumbers = (num, factor) => num / factor;
const Display = (data) => console.debug(`Resultado do calculo: ${data}`);
Display(SumNumbers(num, factor).toString());
Display(DivNumbers(num, factor).toString());
class Sale {
    constructor(productName, price, user = '') {
        this.Id = '';
        this.ProductName = '';
        this.Price = 0;
        this.User = '';
        this.toString = () => `Sale Information: Id: ${this.Id} - Product Name: 
    ${this.ProductName} - Price: ${this.Price} ${this.User == 'Not user' ? '' : `Username: ${this.User}`}`;
        this.Id = 's8d9hasdshduai';
        this.ProductName = productName;
        this.Price = price;
        this.User = user !== null && user !== void 0 ? user : 'Not user';
    }
}
let sale = new Sale('Milk Bottle', 4.57);
console.debug(sale.toString());
function calculateFees(month, price) {
    let result = '';
    if (month >= 0 && month <= 11) {
        let calculateResult = (price * ((1 + 0.05) ** month));
        result = calculateResult.toFixed(2).toString();
    }
    else {
        result = 'Mês Inválido';
    }
    return result;
}
let displayResult = (result) => console.debug(`\nResultado do calculo: ${result}`);
displayResult(calculateFees(4, 75.68));
let employeed = new person_1.default('Alex Julio Lacerda Rocha', 'alrocha003@gmail.com', '18/04/1991', '(11)98312-0982');
console.debug(employeed.toString());
//# sourceMappingURL=index.js.map