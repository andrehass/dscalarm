setAlarmDate();

function setAlarmDate() {
    var date = new Date();
    var minute = date.getMinutes().toString();
        if (minute.lenght == 1){
           minute = "0"+minute;
            };

    var hour = date.getHours().toString();
        if (hour.lenght == 1){
        hour = "0"+hour;
        };
    var month = date.getMonth() + 1;
        month = month.toString();
        if(month.lenght == 1){
          month = "0"+month;
        };
    var day = date.getDate();
        if (day == 1){
            day = "0"+day;
        };
    var year = date.getFullYear().toString().substring(2,4);
    var cmd = minute + hour + month + day + year
    cmd = "010"+cmd;

 console.log(cmd);
}
