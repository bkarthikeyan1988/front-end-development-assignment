 // For 24 Hour Timing
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    if (minutes < 10)
    minutes = "0" + minutes
    // For HTML Output
    document.write(hours + ":" + minutes);
    // For Console Output
    console.log(hours + ":" + minutes);

// For AM PM Timing
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    if (minutes < 10)
    minutes = "0" + minutes

    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
    hours = 12;
    }
    // For HTML Output
    document.write("<br />" + hours + ":" + minutes);
    // For Console Output
    console.log(hours + ":" + minutes);