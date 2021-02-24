//get today's date displayed at the bottom of the jumbotron
var rightNow = moment().format("dddd, MMMM Do");
var todaysDate = document.querySelector("#currentDay");
var jumbotron = document.querySelector(".jumbotron");

todaysDate.append(rightNow);
jumbotron.appendChild(todaysDate);