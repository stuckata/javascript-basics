// JavaScript source code

function convertNum() {
    var decNum = prompt("Please enter a number");
    var num = parseInt(decNum);
    var hexNumStr = num.toString(16);
    hexNumStr = hexNumStr.toUpperCase();
    alert(hexNumStr);
}