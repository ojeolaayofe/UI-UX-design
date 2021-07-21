//ID FOR THE BUTTON...
var checkbtns = document.getElementById("checkbtn");
var text = document.getElementById("registrationPin");

checkbtns.addEventListener('click', checkbtn);

function checkbtn() {
    if (registrationPin.type == "password") {
        registrationPin.type = "text";
    } else {
        registrationPin.type = "password";
    }
}