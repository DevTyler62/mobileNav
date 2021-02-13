let mobileNav = document.querySelector(".hello");
let sideNav = document.getElementById("sideNav");
let closeNav = document.getElementById("closeNav");

// Menu animation
var toggle = document.querySelector('.menu input')
// var animate = setInterval(() => {
//     toggle.checked = !toggle.checked;
// }, 3000)

document.querySelector('.fancyNav').addEventListener('click', () => {
    if (toggle.checked == false){
        sideNav.style.width = "0";
        toggle.checked;
    }
    else {
        sideNav.style.width = "60%";
        toggle.checked;
    }
})