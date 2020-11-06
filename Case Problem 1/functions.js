function showHide18(id) {
    var div = document.getElementById(id);
    var age = prompt("Enter your age");
    if (age >= 18) {
        div.style.display = "block";
    } else if (age < 18 & age >= 10) {
        alert("You are too young!");
    } else if (age < 10 & age > 0){
        alert("You are definitely too young!!!");
    } else if (age == null) {
        
    } else {
        alert("You haven't even been born yet!!! How are you on the internet?!?!");
    }
}