const calcString = require('./stringCalculator');
test('Red Phase', ()=> {
    expect(calcString("")).toBe(0);
    expect(calcString("1\n2,3")).toBe(6);
    expect(calcString("1,5")).toBe(6);
});