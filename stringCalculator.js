function calcString(num) {
    if (num === "") {
      return 0;
    }
  
    let delimiterPattern = /,|\n/; // Default delimiter pattern
  
    // Check if the input string starts with "//"
    if (num.startsWith("//")) {
      // Extract custom delimiter
      const delimiterEndIndex = num.indexOf("\n");
      const customDelimiter = num.substring(2, delimiterEndIndex);
      // Update delimiter pattern with custom delimiter
      delimiterPattern = new RegExp(`[${customDelimiter}]`);
      // Remove custom delimiter definition line from input string
      num = num.substring(delimiterEndIndex + 1);
    }
  
    const numsArray = num.split(delimiterPattern).map(Number);
  
  
    const negativeNumbers = numsArray.filter(num => num < 0);
  
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }
  
    return numsArray.reduce((acc, curr) => acc + curr, 0);
  }
  
  module.exports = calcString;