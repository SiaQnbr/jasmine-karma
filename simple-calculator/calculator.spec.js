describe('calculator.js',() => {
    describe('Calculator', () => {
        it('should initialize the total value', () => {
            const calculator = new Calculator();
            expect(calculator.total).toBe(0);
        });
        it('has constructor', () => {
            const calculator1 = new Calculator();
            const calculator2 = new Calculator();
            expect(calculator1).toEqual(calculator2);
        });
        it('can be instanstiated', () => {
            const calculator1 = new Calculator();
            const calculator2 = new Calculator();
            expect(calculator1).toBeTruthy();
            expect(calculator2).toBeTruthy();
        });
        it('asymmetric matchers!', () => {
            const calculator = new Calculator();
            calculator.total = 50;
            expect(calculator.total).toEqual(jasmine.anything());
            expect(() => {}).toEqual(jasmine.anything());
            // anything cannot be null!
            expect(null).not.toEqual(jasmine.anything());
            //anything cannot be undefined!
            expect(undefined).not.toEqual(jasmine.anything());
        });
        it('use a custom matcher', () => {
            jasmine.addMatchers(customMatchers);
    
            const calculator = new Calculator();
            
            expect(calculator).toBeCalculator();
        });
        it('use a third-party toBeNumber matcher', () => {
            // don't need to register with jasmine.addMatchers(...)
            const calculator = new Calculator();        
            expect(calculator.total).toBeNumber();
        });
        describe('add()', () => {
            it('should add number to total', ()=> {
                const calculator = new Calculator();
                const expectedNumber = 5;
                calculator.add(5);
                expect(calculator.total).toEqual(expectedNumber);
            });
            it('returns total', () => {
                const calculator = new Calculator();
                calculator.total = 50;
        
                
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
            });
        });
        describe('subtract()', () => {
            it('should subtract number from total', ()=> {
                const calculator = new Calculator();
                const expectedNumber = 25;
                calculator.total = 30;
                calculator.subtract(5);
                expect(calculator.total).toEqual(expectedNumber);
            });
        });
        describe('multiply()', () => {
            it('should multiply total by number', ()=> {
                const calculator = new Calculator();
                const expectedNumber = 500;
                calculator.total = 100;
                calculator.multiply(5);
                expect(calculator.total).toEqual(expectedNumber);
            });
        });
        describe('divide()', () => {
            it('should divide total by number', ()=> {
                const calculator = new Calculator();
                const expectedNumber = 10;
                calculator.total = 100;
                calculator.divide(10);
                expect(calculator.total).toEqual(expectedNumber);
            });
            it('handles divide by zero', () => {
                const calculator = new Calculator();
                calculator.total = 100;
                // we should always test real function inside a wrapper function!
                const wrapperFunction = () => {
                    calculator.divide(0);
                }
                
                expect(wrapperFunction).toThrow();
                expect(wrapperFunction).toThrowError(Error);
                expect(wrapperFunction).toThrowError(Error, 'Cannot divide by zero');
            });
        });
    });
    
});