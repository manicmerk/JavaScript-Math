var startValue = prompt("Pick a starting a whole number please.");
var startNum = parseInt(startValue);
var topValue = prompt("Pick a larger number to complete the range.");
var endNum = parseInt(topValue);
var dieRoll = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
document.write('<p class="size">You rolled a <span class="alive">' + dieRoll + '</span> which is a number between ' + startNum + ' and ' + endNum + '.</p>');