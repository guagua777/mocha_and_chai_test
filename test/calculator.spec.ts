import Calculator from '../src/calculator';
import { expect } from 'chai';

describe('Calculator', () => {

    it('should add two numbers', () => {
        const calculator = new Calculator();
        const result = calculator.add(1, 2);
        expect(result).to.equal(3);
    });


    it('should throw an error while dividing by zero',()=>{
        // arrange 
        const calc = new Calculator();
        expect(()=> calc.divide(10,0)).to.throw('Can not divide by zero.');
    });

});
