function checkHide18() {
    var div1 = document.getElementById("hid");
    if (div1.style.display === "none") {
        var age = prompt("Enter your age");
        if (age >= 18) {
            show("hid");
            show("hid2");
        } else if (age < 18 & age >= 10) {
            alert("You are too young!");
        } else if (age < 10 & age > 0){
            alert("You are definitely too young!!!");
        } else if (age == null) {

        } else {
            alert("You haven't even been born yet!!! How are you on the internet?!?!");
        }
    } else {
        show("hid");
        show("hid2");
    }
    
}
function show(id) {
    var div = document.getElementById(id);
    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}