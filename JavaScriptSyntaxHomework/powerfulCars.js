function convertKWtoHP(value) {
    var hpValue = value / 0.745699872;
    hpValue = hpValue.toFixed(2);
    return hpValue;
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));
