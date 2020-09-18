// Begin POP-UP SIZES AND OPTIONS CODE


function popmeup(URL) {
    var popup_width = 1000
    var popup_height = 500
    day = new Date();
    id = day.getTime();
    eval("page" + id + " = window.open(URL, '" + id + "','width='+popup_width+',height='+popup_height+'');");
}


//  End
