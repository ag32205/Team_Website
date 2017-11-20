 var date = new Date();
                var month = date.getMonth();
                var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
                var t = new Date();
                var month = t.getMonth(); //month
                document.write("The date is ", months[month], "/"); //displays month
                var m = new Date();
                var day = m.getDate(); //day
                document.write(day, "/"); //displays day
                var z = new Date();
                var year = z.getFullYear(); //year
                document.write(year, " ") //displays year
                var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // day of the week
                var w = new Date();
                var weekday = w.getDay();
                document.write("Today is a ", dayOfWeek[weekday], "</br>"); //writes the Day of the week
                console.log(weekday); // 1
                //date code
