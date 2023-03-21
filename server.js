const express = require('express');
const { request } = require('http');
const Recipes = require('./views/module/Recipes');

const app = express();
const recipes = Recipes();

//engine para entender o ejs na pasta views
app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (request, response) =>{
    const articleMain = [];
    const articleSecondary = [];
    const articleMeats = []

    recipes.forEach(category => {
        for(let meat of category.meats){
            if(meat.rating > 4  && articleMain.length <= 2){
                articleMain.push(meat);

            }else if(meat.rating < 4  && articleMeats.length <= 3){
                articleMeats.push(meat);
            }
        }
        for(let salad of category.salads){
            if(salad.rating > 4  && articleMain.length <= 2){
                articleMain.push(salad);
            }else if(salad.rating <= 5  && articleSecondary.length <= 3){
                articleSecondary.push(salad);
            }
        }

        for(let recipe of category.mainCourses){
            if(recipe.rating > 4  && articleMain.length <= 2){
                articleMain.push(recipe);
            }else if(recipe.rating <= 4  && articleSecondary.length <= 3){
                articleSecondary.push(recipe);
            }
        }
    });

    response.render("pages/index.ejs", {articleMain, articleSecondary, articleMeats})
});


app.get("/sobre", (request, response) =>{
    response.render("pages/about.ejs")
});

app.get("/contato", (request, response) =>{
    response.render("pages/contact.ejs")
});

// <---------- Categorias das Receitas ---------->
app.get("/categoria/carnes", (request, response) =>{
    const articleMain = [];
    const articleSecondary = [];

    recipes.forEach(category => {
        for(let meat of category.meats){
            if(meat.rating >= 4  && articleMain.length <= 2){
                articleMain.push(meat);
            }else{
                articleSecondary.push(meat);
            }
        }
    });
    response.render("pages/recipes/meat.ejs", {articleMain, articleSecondary})
});
app.get("/categoria/massas", (request, response) =>{
    const articleMain = [];
    const articleSecondary = [];

    recipes.forEach(category => {
        for(let dough of category.doughs){
            if(dough.rating >= 4  && articleMain.length <= 2){  
                articleMain.push(dough);
            }else{
                articleSecondary.push(dough);
            }
        }
    });
    response.render("pages/recipes/dough.ejs", {articleMain, articleSecondary})
});

// <---------- Carnes ---------->
app.get("/categoria/carne/tambaqui-assado-no-forno", (request, response) =>{
    let tambaqui = {};

    recipes.forEach(category =>{
        for(let meat of category.meats){
            if(meat.title.includes("Tambaqui")){
                tambaqui = meat;
            }
        }
    });

    response.render("pages/categories/meats/tambaqui.ejs", {tambaqui})
});



// <---------- Sevidor conectado na porta 8080 ---------->
app.listen(8080, () =>{
    console.log('Server listening on port 8080. . .')
})

