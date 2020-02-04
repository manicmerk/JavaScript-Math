var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var daysPerYear = 365;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<p class="size">There are ' + secondsPerDay + ' seconds in a day</p>');

var yearsAlive = prompt("What is your current age?");
// Use parseInt() to turn prompt string whole numbers into non-string whole numbers.
// Use parseFloat() to turn string decimal value numbers into non-string decimal value numbers.
var secondsAlive = parseInt(yearsAlive) * daysPerYear * hoursPerDay * minsPerHour * secondsPerMin;
document.write('<p class="size">I\'ve been alive more than <span class="alive">' + secondsAlive + '</span> seconds!</p>');

