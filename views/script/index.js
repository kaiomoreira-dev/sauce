const navbarIcon = document.querySelector("header > a");
const navbarMenuMobile = document.querySelector("header").lastElementChild;

const shadowLikes = document.querySelectorAll("main section div");
const sections = document.querySelectorAll("section");

const imagesPost = document.querySelectorAll("figure img");
const divShadowMainPost = document.querySelectorAll("main > article section figure > div")

function toggleNavbarMenuMobile(){
    
    if(navbarMenuMobile.classList.length === 1){
        navbarMenuMobile.setAttribute("class", "navbar-mobile show height");
    }else{
        navbarMenuMobile.setAttribute("class", "navbar-mobile");
    }

}

// <------- Efeito Show menu de Naegação Mobile ------->
navbarIcon.addEventListener("click", toggleNavbarMenuMobile)

// <------- Efeito Zom e Sombra Article Main------->
// Efeito que adiciona zom e sombra nas imagens principal
imagesPost.forEach(image => {
    image.addEventListener("mouseover", () =>{
        let divShadow = image.nextElementSibling;
        image.setAttribute("class", "zomImageArticleMain shadow");
    });
})
// Efeito que remove zom e sombra nas imagens principal
imagesPost.forEach(image => {
    image.addEventListener("mouseleave", () =>{
        image.removeAttribute("class", "zomImageArticleMain shadow");
    });
})

// <------- Efeito Zom Article Secondary------->
// Efeito que adiciona sombra nas imagens secundárias
imagesPost.forEach(image => {
    image.addEventListener("mouseover", () =>{
        let imageId = image.getAttribute("id");
        if(imageId !== "image-1" && imageId !== "image-2"){
            image.setAttribute("class", "zomImageArticleSecondary")
        }
    })
})
// Efeito que remove sombra nas imagens secundárias
imagesPost.forEach(image => {
    image.addEventListener("mouseleave", () =>{
        let imageId = image.getAttribute("id");
        if(imageId !== "image-1" && imageId !== "image-2"){
            image.removeAttribute("class", "zomImageArticleSecondary")
        }
        
    })
})
