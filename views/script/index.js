const navbarIcon = document.querySelector("header > a");
const navbarMenuMobile = document.querySelector("header").lastElementChild;

function toggleNavbarMenuMobile(){
    console.log(navbarMenuMobile.classList.length)
    if(navbarMenuMobile.classList.length === 1){
        navbarMenuMobile.setAttribute("class", "navbar-mobile show height");
    }else{
        navbarMenuMobile.setAttribute("class", "navbar-mobile");
    }

}
navbarIcon.addEventListener("click", toggleNavbarMenuMobile)

