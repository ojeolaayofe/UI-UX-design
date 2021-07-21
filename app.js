/**
 * GLOBAL VARIABLE FOR NAV BAR...
 */
var navbar = document.getElementById("navbar");
var toggle = document.getElementById("toggle");
var close = document.getElementById("close");

//OPEN
toggle.addEventListener('click', navBarToggle);



// navbar.style.left = "50%";
/**
 * WHAT HAPPENS WHEN OUR TOGGLE IS CLICKED...
 */
function navBarToggle() {
    if (navbar.style.getPropertyValue("left") == "-100%") {
        navbar.style.left = "0%";
        close.style.visibility = "visible";
        toggle.style.visibility = "hidden";
    } else {
        navbar.style.left = "-100%";
    }


}

//CLOSE
close.addEventListener('click', navBarClose);

function navBarClose() {
    if (navbar.style.getPropertyValue("left") == "100%") {
        navbar.style.left = "-100%";
        close.style.visibility = "hidden";
        toggle.style.visibility = "visible";
    } else {
        navbar.style.left = "-100%";
    }

    // return navbar.style.left = "0%";

}