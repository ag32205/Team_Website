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
