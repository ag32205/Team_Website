function greeting(d) {
    var hour = d.getHours();
    var day = d.getDay();
    if (day < 0 && hour < 12) {
        return "Ugh, its monday morning!";
    } else if (day < 4 && hour < 12) {
        return "Good Morning!";
    } else if (day < 4 && hour < 17) {
        return "Good Day.";
    } else if (day < 5 && hour < 12) {
        return "Go back to sleep, its the weekend!";
    } else if (day < 5 && hour < 17) {
        return "Hope you are having a great weekend!";
    } else if (day < 5 && hour < 24) {
        return "Good Evening!";
    } else {
        return "Enjoy your evening...tomorrow is Monday!";
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

