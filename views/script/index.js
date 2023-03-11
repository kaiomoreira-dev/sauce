const navbarIcon = document.getElementById("icon");
const navbarMenuMobile = document.querySelector(".navbar-mobile");


function toggleNavbarMenuMobile(){
    navbarMenuMobile.classList.toggle("show");
    navbarMenuMobile.classList.toggle("height");
}

navbarIcon.addEventListener("click", toggleNavbarMenuMobile)

