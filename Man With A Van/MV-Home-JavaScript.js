// GLOBAL
//Days and Months
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//Current Date
var fullToday = new Date();
var Today = months[fullToday.getMonth()] + " " + fullToday.getDate() + ", " + fullToday.getFullYear();
var timeToday = fullToday.getHours() + ":" + fullToday.getMinutes;

//Universal Day and Time
var universalToday = months[fullToday.getUTCMonth()] + " " +  fullToday.getUTCDate() + ", " + fullToday.getUTCMonth();
var universalTime = fullToday.getUTCHours() + ":" + fullToday.getUTCMinutes()

//Last Modified
var edited = new Date(document.lastModified);


//Page Updated
document.getElementById("updateDate").innerHTML = edited;
document.getElementById("updateDate").innerHTML = days[edited.getDay()] + ", " + months[edited.getMonth()] + " " + edited.getDate() + ", " + edited.getFullYear();

//Back To Top Link
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
  document.getElementById("top-of-page").style.display = "block";
} else {
  document.getElementById("top-of-page").style.display = "none";
}
}


//Practice


