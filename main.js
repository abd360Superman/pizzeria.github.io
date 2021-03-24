var menu_list_array = ["Margherita Pizza", "Pepporoni Pizza", "Meditarranean Pizza", "Paneer Tikka Pizza", "Chicken Pizza", "Veg Extravaganza Pizza", "Unthinkable Pizza", "Moroccan Spicy Pasta Pizza", "Cheese Nurst Pizza"];
function getmenu() {
    var htmldata;
    htmldata = "<ol class='menu_list'>"
    menu_list_array.sort();
    for(var i = 0; i < menu_list_array.length;i++) {
        htmldata = htmldata + "<li>" + menu_list_array[i] + "</li>"
    }
    htmldata = htmldata + "</ol>";
    document.getElementById("display_menu").innerHTML = htmldata;
}
function additem() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>";
    for(var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata+"<div class='card'>" + "<img src = 'images/pizzaImg.png'/>" + menu_list_array[i] + "</div";
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}