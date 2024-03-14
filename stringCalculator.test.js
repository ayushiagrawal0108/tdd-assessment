const calcString = require('./stringCalculator');

test('Custom Delimiter and Negative Numbers', () => {

  expect(calcString("//@\n1@2@3")).toBe(6); 


  expect(() => calcString("//@\n-1@2@-3")).toThrow("Negative numbers not allowed: -1,-3");

  expect(() => calcString("1,-2,3")).toThrow("Negative numbers not allowed: -2");

  expect(calcString("")).toBe(0);

  expect(calcString("5")).toBe(5);

  expect(calcString("//;\n1;2")).toBe(3); // Custom delimiter is ";"
});