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
    
//HOME PAGE


//CONTACT PAGE

//Form
var mfEmail = document.getElementById("e-mail").value;
var emptyEmail = Boolean(mfEmail == "");
document.getElementById("form-demo").innerHTML = emptyEmail;

var mfPhone = document.getElementById("phone").value;
var emptyPhone = Boolean(mfPhone == "");
document.getElementById("form-demo1").innerHTML = emptyPhone;

function submitMsg() {
  alert("Your interest is appreciated.  We'll be in touch soon.");
}