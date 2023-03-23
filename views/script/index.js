const navbarIcon = document.querySelector("header > a");

const sections = document.querySelectorAll("section");

const imagesPost = document.querySelectorAll("figure img");
const divShadowMainPost = document.querySelectorAll("main > article section figure > div")

const body = document.querySelector("body");

const navItemSearch = document.querySelector("header nav").lastElementChild;

const iconeShowMenuMobile = document.querySelector(".btnShowMenuMobile");

const navbarMenu = document.querySelector(".navbar-menu")

const mainIndex = document.querySelector("#main-1");

const liShowCategories = document.querySelector(".navbar-menu li + li");
const ulCategories = document.querySelector(".navbar-menu .categories");
const iconeAngleDown = document.querySelector(".navbar-menu li + li i");
const header = document.querySelector("header");

// const lastChildArticle = document.getElementById("#loader-article").previousElementSibling;
const loaderArticle = document.getElementById("#loader-article");
const loaderArticleElement = document.querySelector("main").lastElementChild;
const emphasisH2 = document.querySelectorAll("h2");

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
    if(!categoriesId){
        iconeAngleDown.setAttribute("id","rotateInverse")
        ulCategories.setAttribute("id","showCategories")
        

    }else{
        iconeAngleDown.removeAttribute("id","rotateInverse")
        ulCategories.removeAttribute("id","showCategories")
    }
    
})

mainIndex.addEventListener("click", () =>{
    iconeAngleDown.removeAttribute("id","rotateInverse")
    ulCategories.removeAttribute("id","showCategories")
})

// lastChildArticle
// loaderArticle

async function createArticleSecondaryDough(){
    const recipes = (await import("../module/RecipeTest.js")).default;

    let recipesDough = []

    const emphasis = document.createElement("div");
    const h2 = document.createElement("h2");
    emphasis.appendChild(h2);
    emphasis.classList.add("emphasis")
    h2.innerHTML = "Massa";
    mainIndex.insertBefore(emphasis, loaderArticleElement);
    
    recipes.forEach(recipe => {
        for(let dough of recipe.doughs){
            if(recipesDough.length <= 3){
                recipesDough.push(dough);
            }
        }
        
    })
    
    const articleSecondaryDough = document.createElement("article")

    for(let dough of recipesDough){
        const section = document.createElement("section");
        const figure = document.createElement("figure");
        const a_link = document.createElement("a");
        const image = document.createElement("img");

        const divTitle = document.createElement("div");
        const h1 = document.createElement("h1");
        const divStars = document.createElement("div");

        articleSecondaryDough.classList.add("article-second-recipe");
        a_link.setAttribute("href", dough.path)
        image.setAttribute("src", dough.img)
        divTitle.classList.add("title");
        h1.innerHTML = dough.title;
        divStars.classList.add("stars");

        section.appendChild(figure);
        figure.appendChild(a_link);
        a_link.appendChild(image);

        section.appendChild(divTitle);
        divTitle.appendChild(h1);
        divTitle.appendChild(divStars);

        for(let i = 0; i < 5; i++){
            const i_star = document.createElement("i");
            divStars.appendChild(i_star);
        }

        articleSecondaryDough.appendChild(section);
    }

    mainIndex.insertBefore(articleSecondaryDough, loaderArticleElement);
}
async function createArticleSecondaryMainCourses(){
    const recipes = (await import("../module/RecipeTest.js")).default;

    let mainCourses = []

    const emphasis = document.createElement("div");
    const h2 = document.createElement("h2");
    emphasis.appendChild(h2);
    emphasis.classList.add("emphasis")
    h2.innerHTML = "Prato Principal";
    mainIndex.insertBefore(emphasis, loaderArticleElement);
    
    recipes.forEach(recipe => {
        for(let course of recipe.mainCourses){
            if(mainCourses.length <= 3){
                mainCourses.push(course);
            }
        }     
    })  
    const articleSecondary = document.createElement("article")

    for(let course of mainCourses){
        const section = document.createElement("section");
        const figure = document.createElement("figure");
        const a_link = document.createElement("a");
        const image = document.createElement("img");

        const divTitle = document.createElement("div");
        const h1 = document.createElement("h1");
        const divStars = document.createElement("div");

        articleSecondary.classList.add("article-second-recipe");
        a_link.setAttribute("href", course.path)
        image.setAttribute("src", course.img)
        divTitle.classList.add("title");
        h1.innerHTML = course.title;
        divStars.classList.add("stars");

        section.appendChild(figure);
        figure.appendChild(a_link);
        a_link.appendChild(image);

        section.appendChild(divTitle);
        divTitle.appendChild(h1);
        divTitle.appendChild(divStars);

        for(let i = 0; i < 5; i++){
            const i_star = document.createElement("i");
            divStars.appendChild(i_star);
        }

        articleSecondary.appendChild(section);
    }

    mainIndex.insertBefore(articleSecondary, loaderArticleElement);
}

async function handleInfiniteScroll(){
    const endOfPage = window.innerHeight + window.pageYOffset >= mainIndex.offsetHeight;
    if (endOfPage && mainIndex.offsetHeight < 2000) {
        createArticleSecondaryDough();
    }
    if(endOfPage && mainIndex.offsetHeight > 2000) {
        createArticleSecondaryMainCourses();
    }
    if(endOfPage && mainIndex.offsetHeight > 2500 ){
        window.removeEventListener("scroll", handleInfiniteScroll);
        loaderArticleElement.remove();
    }
  };
window.addEventListener("scroll", handleInfiniteScroll);
