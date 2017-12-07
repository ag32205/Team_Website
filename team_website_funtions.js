function greeting(today) {
    var hour = today.getHours();
    var day = today.getDay();
    if (day == 0 || day == 6 && hour < 12) {
        return "Go back to sleep, its the weekend!";
    } else if (day == 0 || day == 6 && hour < 17) {
        return "Hope you are having a great weekend!";
    } else if (day == 0 && hour < 24) {
        return "Enjoy your evening...tomorrow is Monday!";
    } else if (day == 1 && hour < 12) {
        return "Ugh, its monday morning!";
    } else if (day > 1 && hour < 12) {
        return "Good Morning!";
    } else if (day == 5 || day < 5 && hour < 17) {
        return "Good Day!";
    } else {
        return "Good Evening!";
    }
}

function birthdayCountDown(bdate) {

    var today = new Date();
    var bday = new Date(bdate);
    var currenttime = today.getTime();
    var btime = bday.getTime();

    if ((btime - currenttime) < 0) {


        bday.setFullYear(today.getFullYear());

        if ((bday.getTime() - today.getTime()) < 0) {
            bday.setFullYear(bday.getFullYear() + 1);
        }

    }

    var daysuntil = Math.ceil((bday.getTime() / 86400000) - (today.getTime() / 86400000));


    document.write("My birthday is in ", daysuntil, " days.");


}

function dateMessage() {
    var dayThing = new Date();
    var day = dayThing.getDate();
    var ending;
    if (day == 1 || day == 21 || day == 31) {
        ending = "st";
    } else if (day == 2 || day == 22) {
        ending = "nd";
    } else if (day == 3 || day == 23) {
        ending = "rd";
    } else {
        ending = "th";
    }
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // gets day of the week from here
    var n = new Date();
    var weekday = n.getDay();
    document.write("Today is ", dayOfWeek[weekday], ", "); //writes the Day of the week
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var s = new Date();
    var month = s.getMonth(); //gets the month function
    document.write(months[month], " "); //displays month
    var r = new Date();
    var dayNumber = r.getDate(); //gets day number
    document.write(dayNumber, ending); //displays day
}
