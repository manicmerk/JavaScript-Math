var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var daysPerYear = 365;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<p class="size">There are ' + secondsPerDay + ' seconds in a day</p>');

var yearsAlive = 34;
var secondsAlive = yearsAlive * weeksPerYear * daysPerWeek * hoursPerDay * minsPerHour * secondsPerMin;
document.write('<p class="size">I\'ve been alive more than ' + secondsAlive + ' seconds!</p>');