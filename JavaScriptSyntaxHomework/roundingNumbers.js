function roundNumber(value) {
    var result = [Math.floor(value), Math.round(value)];
    return(result);
}

console.log(roundNumber(22.7)[0]);
console.log(roundNumber(22.7)[1]);
console.log(roundNumber(12.3)[0]);
console.log(roundNumber(12.3)[1]);
console.log(roundNumber(58.7)[0]);
console.log(roundNumber(58.7)[1]);
