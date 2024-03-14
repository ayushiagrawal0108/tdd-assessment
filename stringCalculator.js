function calcString(num) {
    if (num === "") {
        return 0;
    }
    
    const numsArray = num.split(/,|\n/);

    return numsArray.reduce((acc, curr) => acc + parseInt(curr), 0);
}

module.exports = calcString;
