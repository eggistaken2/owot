return function (array, menuFunction) {
    menu.addEntry("<div id='customMenu'>" + array.split``.map(x => x == 2 ? "<br>" : "<span style='color:" + (+x ? "#000000" : "#e5e5ff") + "'>█</span>").join`` + "</div>");
    customMenu.onclick = menuFunction;
}
