const navbarIcon = document.querySelector("header > a");
const navbarMenuMobile = document.querySelector("header").lastElementChild;

const shadowLikes = document.querySelectorAll("main section div");
const sections = document.querySelectorAll("section");

const imagesPost = document.querySelectorAll("figure img");

function toggleNavbarMenuMobile(){
    
    if(navbarMenuMobile.classList.length === 1){
        navbarMenuMobile.setAttribute("class", "navbar-mobile show height");
    }else{
        navbarMenuMobile.setAttribute("class", "navbar-mobile");
    }

}
navbarIcon.addEventListener("click", toggleNavbarMenuMobile)

// Efeito que adiciona sombra nas imagens principal
imagesPost.forEach(image => {
    image.addEventListener("mouseover", () =>{
        let imageId = image.getAttribute("id");

        if(imageId === "image-1" || imageId === "image-2"){
            image.setAttribute("class", "zomImageMain");
        }
    });
})
// // Efeito que remove sombra nas imagens principal
imagesPost.forEach(image => {
    image.addEventListener("mouseleave", () =>{
        image.removeAttribute("class", "zomImageMain");
    });
})

// Efeito que adiciona sombra nas imagens secundárias
// imagesPost.forEach(image => {
//     image.addEventListener("mouseover", () =>{
//         image.setAttribute("class", "shadowLikeSecondary")
//     })
// })
// imagesPost.forEach(image => {
//     image.addEventListener("mouseleave", () =>{
//         image.removeAttribute("class", "shadowLikeSecondary")
//     })
// })



