var settings_menu = document.querySelector(".settings-menu");

function settings_menu_toggle(){
    settings_menu.classList.toggle("settings-menu-height")
}

var openProfile = document.querySelector(".user-profile-page-action");

function openProfileAction(){
    openProfile.classList.toggle("user-profile-page-action-click");
}

function closeProfile(){
    openProfile.classList.remove("user-profile-page-action-click");
}


// =================== For Desktop Profile Edit
var editPop = document.querySelector(".user-profile-edit-pop-up-bg");

function editPopUp(){
    editPop.style.display = "block";
} 

function closeEditPopUp(){
    editPop.style.display = "none";
}


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

// Mobile Menu 

var mobileMenu = document.querySelector(".mobile-menu");
var mobileMenuBtn = document.querySelector(".mobile-menu-open");
var mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");

mobileMenuBtn.onclick = ()=>{ 
    mobileMenu.classList.toggle("mobile-menu-height");
}

mobileMenuCloseBtn.onclick = ()=>{
    mobileMenu.classList.remove("mobile-menu-height");
}

// Dark Mode and Light Mode Swtich 
var darkModeSwitch2 = document.querySelector("#dark-btn2");

// Dark Mode for For Mobile
if(localStorage.getItem("theme") == "light"){
    darkModeSwitch2.classList.remove("clicked");
    document.body.classList.remove("dark-mode-color");
}
else if(localStorage.getItem("theme") == "dark"){
    darkModeSwitch2.classList.add("clicked");
    document.body.classList.add("dark-mode-color");
}
else{
    localStorage.setItem("theme", "light"); 
}

darkModeSwitch2.onclick = ()=>{
    darkModeSwitch2.classList.toggle("clicked");
    document.body.classList.toggle("dark-mode-color");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light");
    }
}

// End of Dark Mode and Light Mode Swtich
