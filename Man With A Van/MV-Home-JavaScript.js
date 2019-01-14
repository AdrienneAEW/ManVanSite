// GLOBAL
//Page Update

var edited = new Date(document.lastModified);
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("updateDate").innerHTML = edited;

    document.getElementById("updateDate").innerHTML = days[edited.getDay()] + ", " + months[edited.getMonth()] + " " + edited.getDate() + ", " + edited.getFullYear();
    
//HOME PAGE
