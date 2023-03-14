const navbarIcon = document.querySelector("header > a");
const navbarMenuMobile = document.querySelector("header").lastElementChild;

const shadowLikes = document.querySelectorAll("main section div");
const sections = document.querySelectorAll("section");

const imagesPost = document.querySelectorAll("figure img");
const divShadowMainPost = document.querySelectorAll("main > article section figure > div")

const body = document.querySelector("body");

const navItemSearch = document.querySelector("header nav").lastElementChild;

imagesPost.forEach(image => {
    image.setAttribute("title", "Ler mais")
})

document.addEventListener("scroll", (event) => {
     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navItemSearch.setAttribute("id","showIconeSearch")
     }else{
        navItemSearch.removeAttribute("id","showIconeSearch")
     }
})


function toggleNavbarMenuMobile(){
    
    if(navbarMenuMobile.classList.length === 1){
        navbarMenuMobile.classList.add("navbar-mobile show height");
    }else{
        navbarMenuMobile.classList.remove("navbar-mobile");
    }

}




// Mostar icone para pesquisar ao rolar a barra de scroll


// <------- Efeito Show menu de Naegação Mobile ------->
navbarIcon.addEventListener("click", toggleNavbarMenuMobile)


// <------- Efeito Zom e Sombra Article Main------->
// Efeito que adiciona zom e sombra nas imagens principal
imagesPost.forEach(image => {
    image.addEventListener("mouseenter", () =>{
        image.classList.add("zomImageArticleMain");
    });
})
// Efeito que remove zom e sombra nas imagens principal
imagesPost.forEach(image => {
    image.addEventListener("mouseleave", () =>{
        image.classList.remove("zomImageArticleMain");
    });
})

// <------- Efeito Zom Article------->
// Efeito que adiciona zom nas imagens 
imagesPost.forEach(image => {
    image.addEventListener("mouseenter", () =>{
        let imageId = image.getAttribute("id");
        if(imageId !== "image-1" && imageId !== "image-2"){
            image.classList.add("zomImageArticle")
        }
    })
})
// Efeito que remove zom nas imagens
imagesPost.forEach(image => {
    image.addEventListener("mouseenter", () =>{
        let imageId = image.getAttribute("id");
        if(imageId !== "image-1" && imageId !== "image-2"){
            image.classList.remove("zomImageArticle")
        }
        
    })
})
