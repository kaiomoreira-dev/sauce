const navbarIcon = document.querySelector("header > a");

const sections = document.querySelectorAll("section");

const imagesPost = document.querySelectorAll("figure img");
const divShadowMainPost = document.querySelectorAll("main > article section figure > div")

const body = document.querySelector("body");

const navItemSearch = document.querySelector("header nav").lastElementChild;

const iconeShowMenuMobile = document.querySelector(".btnShowMenuMobile");

const navbarMenu = document.querySelector(".navbar-menu")

const main = document.querySelector("main");

const liShowCategories = document.querySelector(".navbar-menu li + li");
const ulCategories = document.querySelector(".navbar-menu .categories");
const iconeAngleDown = document.querySelector(".navbar-menu li + li i");
const header = document.querySelector("header");


imagesPost.forEach(image => {
    image.setAttribute("title", "Ler mais")
})

function toggleNavbarMenuMobile(){
    
    if(navbarMenuMobile.classList.length === 1){
        navbarMenuMobile.classList.add("navbar-mobile show height");
    }else{
        navbarMenuMobile.classList.remove("navbar-mobile");
    }

}

// Mostar icone para pesquisar ao rolar a barra de scroll
document.addEventListener("scroll", (event) => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       navItemSearch.setAttribute("id","showIconeSearch")
    }else{
       navItemSearch.removeAttribute("id","showIconeSearch")
    }
})

// <------- Efeito Show menu de Naegação Mobile ------->
// navbarIcon.addEventListener("click", toggleNavbarMenuMobile)
iconeShowMenuMobile.addEventListener("click", event =>{
    const iconeIdLength = iconeShowMenuMobile.getAttribute("id");
    if(iconeIdLength === null){
        iconeShowMenuMobile.setAttribute("id","transformX");
        navbarMenu.setAttribute("id","showNavbarMenu");
        // main.setAttribute("id", "hidde");
        
    }else{
        iconeShowMenuMobile.removeAttribute("id","transformX");
        navbarMenu.removeAttribute("id","showNavbarMenu");
        // main.removeAttribute("id", "hidde");
    }

})

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
liShowCategories.addEventListener("click", () =>{
    let liShowCategory = liShowCategories.getAttribute("id");
    if(!liShowCategory){
        liShowCategories.setAttribute("id", "upHeightItemCategoryRecipes")
    }else{
        liShowCategories.removeAttribute("id", "upHeightItemCategoryRecipes")

    }
});
liShowCategories.addEventListener("click", () =>{
    let categoriesId = ulCategories.getAttribute("id");
    console.log(categoriesId)
    if(!categoriesId){
        iconeAngleDown.setAttribute("id","rotateInverse")
        ulCategories.setAttribute("id","showCategories")
        

    }else{
        iconeAngleDown.removeAttribute("id","rotateInverse")
        ulCategories.removeAttribute("id","showCategories")
    }
    
})

main.addEventListener("click", () =>{
    iconeAngleDown.removeAttribute("id","rotateInverse")
    ulCategories.removeAttribute("id","showCategories")
})
