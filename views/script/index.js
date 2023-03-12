const navbarIcon = document.querySelector("header > a");
const navbarMenuMobile = document.querySelector("header").lastElementChild;

const shadowLikes = document.querySelectorAll("main section div");
const sections = document.querySelectorAll("section");

const figures = document.querySelectorAll("figure");

function toggleNavbarMenuMobile(){
    
    if(navbarMenuMobile.classList.length === 1){
        navbarMenuMobile.setAttribute("class", "navbar-mobile show height");
    }else{
        navbarMenuMobile.setAttribute("class", "navbar-mobile");
    }

}
navbarIcon.addEventListener("click", toggleNavbarMenuMobile)

// Efeito que adiciona sombra nas imagens principal
sections.forEach(section => {
    section.addEventListener("mouseover", () =>{
        let sectionId = section.getAttribute("id")

        if(sectionId === "section-1" || sectionId === "section-2"){
            section.setAttribute("class", "shadowLikeMain");
        }
    });
})
// Efeito que remove sombra nas imagens principal
sections.forEach(section => {
    section.addEventListener("mouseleave", () =>{
        section.removeAttribute("class", "shadowLike");
    });
})
// Efeito que adiciona sombra nas imagens secundárias
figures.forEach(figure => {
    figure.addEventListener("mouseover", () =>{
        figure.setAttribute("class", "shadowLikeSecondary")
    })
})
figures.forEach(figure => {
    figure.addEventListener("mouseleave", () =>{
        figure.removeAttribute("class", "shadowLikeSecondary")
    })
})



