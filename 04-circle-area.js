// JavaScript source code

function calcCircleArea(r) {
    var area = Math.PI * (r * r);
    return area;
}

document.getElementById("firstR").innerHTML += calcCircleArea(7);
document.getElementById("secondR").innerHTML += calcCircleArea(1.5);
document.getElementById("thirdR").innerHTML += calcCircleArea(20);

