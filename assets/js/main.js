var settings_menu = document.querySelector(".settings-menu");

// For the Create Post Pop-up for Desktop
var clickInput = document.querySelector(".input-btn");
var inputFocus = document.querySelector(".new-post-input textarea");
var flex = document.querySelector(".flex");
var closes = document.querySelector(".close-function");




function settings_menu_toggle(){
    settings_menu.classList.toggle("settings-menu-height")
}
/*
clickInput.onclick = ()=>{
    flex.style.display = "block";
    inputFocus.focus();
}

closes.onclick = ()=>{
    flex.style.display = "none";
}
*/

// Dark Mode and Light Mode Swtich 
var darkModeSwitch = document.querySelector("#dark-btn");



if(localStorage.getItem("theme") == "light"){
    darkModeSwitch.classList.remove("clicked");
    document.body.classList.remove("dark-mode-color");
}
else if(localStorage.getItem("theme") == "dark"){
    darkModeSwitch.classList.add("clicked");
    document.body.classList.add("dark-mode-color");
}
else{
    localStorage.setItem("theme", "light"); 
}


darkModeSwitch.onclick = ()=>{
    darkModeSwitch.classList.toggle("clicked");
    document.body.classList.toggle("dark-mode-color");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light");
    }

}
// End of Dark Mode and Light Mode Swtich
