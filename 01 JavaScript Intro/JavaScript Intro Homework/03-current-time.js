// JavaScript source code

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

if (minutes < 10) {
    console.log(hours + ":" + "0" + minutes);
} else {
    console.log(hours + ":" + minutes);
}
