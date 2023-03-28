const navbarIcon = document.querySelector("header > a");

const sections = document.querySelectorAll("section");

const imagesPost = document.querySelectorAll("figure img");
const divShadowMainPost = document.querySelectorAll("main > article section figure > div")

const body = document.querySelector("body");

const navItemSearch = document.querySelector(".navItem-search");

const iconeShowMenuMobile = document.querySelector(".btnShowMenuMobile");

const navbarMenu = document.querySelector(".navbar-menu")

const mainIndex = document.querySelector("#main-1");
const mainIndex2 = document.querySelector("#main-2");
const mainElement = document.querySelector("main");

const liShowCategories = document.querySelector(".navbar-menu li + li");
const ulCategories = document.querySelector(".navbar-menu .categories");
const iconeAngleDown = document.querySelector(".navbar-menu li + li i");
const header = document.querySelector("header");

const loaderArticleElement = document.querySelector("main").lastElementChild;

const formSearch = document.querySelector(".section-search form");
const inputSearch = document.querySelector(".section-search input");
const buttonSearch = document.querySelector(".section-search button");

const ulInfoSearchHelper = document.getElementById("search-helper");

const iconSearch = document.querySelector(".navItem-search img");
const navbarGlobal = document.querySelector(".navbar-global");
const container = document.querySelector("body > div");
const searchHeader = document.getElementById("search-header");
const searchShadow = document.getElementById("search-shadow");
const iconeCloseSearch = document.querySelector("header #search-header button");


$(".navbar-global .navItem-search img").on("click",()=>{
    $("#search-header").slideDown();
})
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
    let categoriesId = ulCategories.getAttribute("id");
    if(!categoriesId){
        iconeAngleDown.setAttribute("id","rotateInverse")
        ulCategories.setAttribute("id","showCategories")
        

    }else{
        iconeAngleDown.removeAttribute("id","rotateInverse")
        ulCategories.removeAttribute("id","showCategories")
    }
    
});

liShowCategories.addEventListener("click", () =>{
        let liShowCategory = liShowCategories.getAttribute("id");
        if(!liShowCategory){
            liShowCategories.setAttribute("id", "upHeightItemCategoryRecipes")
        }else{
            liShowCategories.removeAttribute("id", "upHeightItemCategoryRecipes")

        }
    });
mainElement.addEventListener("click", () =>{
    iconeAngleDown.removeAttribute("id","rotateInverse")
    ulCategories.removeAttribute("id","showCategories")
})
searchShadow.addEventListener("click", () =>{
    searchHeader.style.display = "none";
    document.body.style.overflow = "initial";

    navbarGlobal.classList.remove("hiddenNavbarGlobal");

    $("#search-header").fadeOut((speed, easing)=>{
        speed = "slow";
    });
    
    body.classList.remove("scrollStyle")
    searchShadow.style.display = "none";
    enableScrollTop();
});
async function createArticleSecondaryDough(){
    const recipes = (await import("../module/Categories.js")).default;
        
    let recipesDough = []

    const emphasis = document.createElement("div");
    const h2 = document.createElement("h2");
    emphasis.appendChild(h2);
    emphasis.classList.add("emphasis")
    h2.innerHTML = "Massa";
    mainIndex.insertBefore(emphasis, loaderArticleElement);
    recipes.Categories.forEach(recipe => {
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
    const recipes = (await import("../module/Categories.js")).default;

    let mainCourses = []

    const emphasis = document.createElement("div");
    const h2 = document.createElement("h2");
    emphasis.appendChild(h2);
    emphasis.classList.add("emphasis")
    h2.innerHTML = "Prato Principal";
    mainIndex.insertBefore(emphasis, loaderArticleElement);
    
    recipes.Categories.forEach(recipe => {
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

async function createArticleSecondaryDessert(){
    const recipes = (await import("../module/Categories.js")).default;

    let recipesDessert = []

    const emphasis = document.createElement("div");
    const h2 = document.createElement("h2");
    emphasis.appendChild(h2);
    emphasis.classList.add("emphasis")
    h2.innerHTML = "Sobremesas";
    mainIndex.insertBefore(emphasis, loaderArticleElement);
    
    recipes.Categories.forEach(recipe => {
        for(let desserts of recipe.desserts){
            if(recipesDessert.length <= 3){
                recipesDessert.push(desserts);
            }
        }
        
    })
    
    const articleSecondaryDessert = document.createElement("article")

    for(let dessert of recipesDessert){
        const section = document.createElement("section");
        const figure = document.createElement("figure");
        const a_link = document.createElement("a");
        const image = document.createElement("img");

        const divTitle = document.createElement("div");
        const h1 = document.createElement("h1");
        const divStars = document.createElement("div");

        articleSecondaryDessert.classList.add("article-second-recipe");
        a_link.setAttribute("href", dessert.path)
        image.setAttribute("src", dessert.img)
        divTitle.classList.add("title");
        h1.innerHTML = dessert.title;
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

        articleSecondaryDessert.appendChild(section);
    }

    mainIndex.insertBefore(articleSecondaryDessert, loaderArticleElement);
}

async function handleInfiniteScroll(){
    try {
        const endOfPage = window.innerHeight + window.pageYOffset >= mainIndex.offsetHeight;
        console.log(mainIndex.children.length)
        if (endOfPage && mainIndex.children.length === 7) {
            createArticleSecondaryDough();

        }
        if(endOfPage && mainIndex.children.length === 9) {
            createArticleSecondaryMainCourses();
        }

        if(endOfPage && mainIndex.children.length === 11){
            createArticleSecondaryDessert()  
        }

        if(endOfPage && mainIndex.children.length === 13){
            window.removeEventListener("scroll", handleInfiniteScroll);
            loaderArticleElement.remove();
        }
    
    } catch (error) {
        console.log(error);
        window.removeEventListener("scroll", handleInfiniteScroll);
    }
    
  };
window.addEventListener("scroll", handleInfiniteScroll);

window.onload = () =>{
    try {
    if(mainIndex2.offsetHeight <= 900){
        ulInfoSearchHelper.style.display = "block";
    console.log(mainIndex2.offsetHeight)

    }else{
        ulInfoSearchHelper.style.display = "none";
    }

    } catch (error) {
        console.log(error);
    }
}

function disableScrollTop(){
    let scrollbarTop = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = () => {
        window.scrollTo(0, scrollbarTop)
    }
    
}
function enableScrollTop(){
    window.onscroll = () => {}
}
// <----- Jquery ----->
iconSearch.addEventListener("click", ()=>{
    searchShadow.style.display = "block";
    searchHeader.style.display = "flex";

    
    let getClassesNavbarglobal = navbarGlobal.getAttribute("class");
    if(getClassesNavbarglobal.includes("navbar-global")){
        navbarGlobal.classList.add("hiddenNavbarGlobal");
        

    }
    body.classList.add("scrollStyle")
    disableScrollTop();

})
iconeCloseSearch.addEventListener("click", ()=>{
    searchHeader.style.display = "none";
    document.body.style.overflow = "initial";

    navbarGlobal.classList.remove("hiddenNavbarGlobal");

    $("#search-header").fadeOut((speed, easing)=>{
        speed = "slow";
    });
    
    body.classList.remove("scrollStyle")
    searchShadow.style.display = "none";
    enableScrollTop();
});
