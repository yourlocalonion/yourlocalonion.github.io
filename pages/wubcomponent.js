let body = document.querySelector("body");
let tticon = document.querySelector("#tt_icon")
function toggletheme() {
    body.classList.toggle("dark");
    if (tticon.innerHTML === "dark_mode") {
        tticon.innerHTML = "light_mode";
    } else {
        tticon.innerHTML = "dark_mode";
    }
};