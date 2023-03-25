const { default: axios, all } = require('axios');
const express = require('express');
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

    recipes.recipes.forEach(category => {
        for(let meat of category.meats){
            if(meat.rating > 4  && articleMain.length <= 2){
                articleMain.push(meat);

            }else if(meat.rating < 4  && articleMeats.length <= 3){
                articleMeats.push(meat);
            }
        }
        for(let salad of category.meats){
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

// <---------- Procurar Receitas ---------->
app.get("/search", async (request, response) =>{
    const articleMain = [];
    const articleSecondary = [];

    let translatedText = [];
    let searchedRecipe = request.query.recipe;

    const options = {
        method: 'POST',
        url: 'https://translation.googleapis.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        data: {
            q:searchedRecipe,
            source:"pt",
            target: "en",
            format: "text",
            key: "AIzaSyDxCJQUwoEz4GN9-o5Y6HQzsRc61IptTNQ"
        }
      };
      const data = await axios.request(options).then(function (response) {
        return JSON.stringify(response.data);
      
      }).catch(function (error) {
          console.error(error);
      });
      for(let element in data){
        if(element > 43 && element < data.length - 5){
            translatedText.push(data[element]);
        }
      }
      const translatedTextFormatted = translatedText.join("").toLocaleLowerCase().replace(" ", "");      
    for(let category of recipes.recipes){
        if(translatedTextFormatted === "pastas" || translatedTextFormatted === "pasta"){
            for(let dough of category.doughs){
                if(dough.rating === 5){
                    articleMain.push(dough);
                }else{
                    articleSecondary.push(dough);
                }
            }
        }
        if(translatedTextFormatted === "salads" || translatedTextFormatted === "salad"){
            for(let salad of category.salads){
                if(salad.rating === 5){
                    articleMain.push(salad);
                }else{
                    articleSecondary.push(salad);
                }
            }
        }
        if(translatedTextFormatted === "meats" || translatedTextFormatted === "meat"){
            for(let meat of category.meats){
                if(meat.rating === 5){
                    articleMain.push(meat);
                }else{
                    articleSecondary.push(meat);
                }
            }
        }
        if(translatedTextFormatted === "desserts" || translatedTextFormatted === "dessert"){
            for(let dessert of category.desserts){
                if(dessert.rating === 5){
                    articleMain.push(dessert);
                }else{
                    articleSecondary.push(dessert);
                }
            }
        }
        if(translatedTextFormatted === "maincourses" || translatedTextFormatted === "maincourse"){
            for(let mainCourse of category.mainCourses){
                if(mainCourse.rating === 5){
                    articleMain.push(mainCourse);
                }else{
                    articleSecondary.push(mainCourse);
                }
            }
        }  
        let searchedRecipeFormatted = searchedRecipe.toLowerCase();
        for(let recipe of recipes.allRecipes){
            let recipeTitle = recipe.title.toLowerCase();

            if(searchedRecipeFormatted === recipeTitle && recipe.category === "meats"){
                articleMain.push(recipe);     
                for(let category of recipes.recipes){
                    for(let meat of category.meats){
                        if(searchedRecipeFormatted !== meat.title.toLocaleLowerCase() && articleMain.length <=2 && meat.rating === 5){
                            articleMain.push(meat);
                        }else if(searchedRecipeFormatted !== meat.title.toLocaleLowerCase() && meat.rating <= 5){
                            articleSecondary.push(meat);
                        }
                    }
                }

            }
            if(searchedRecipeFormatted === recipeTitle && recipe.category === "desserts"){
                articleMain.push(recipe);     
                for(let category of recipes.recipes){
                    for(let dessert of category.desserts){
                        if(searchedRecipeFormatted !== dessert.title.toLocaleLowerCase() && articleMain.length <=2 && dessert.rating === 5){
                            articleMain.push(dessert);
                        }else if(searchedRecipeFormatted !== dessert.title.toLocaleLowerCase() && dessert.rating <= 5){
                            articleSecondary.push(dessert);
                        }
                    }
                }

            }
            if(searchedRecipeFormatted === recipeTitle && recipe.category === "doughs"){
                articleMain.push(recipe);     
                for(let category of recipes.recipes){
                    for(let dough of category.doughs){
                        if(searchedRecipeFormatted !== dough.title.toLocaleLowerCase() && articleMain.length <=2 && dough.rating === 5){
                            articleMain.push(dough);
                        }else if(searchedRecipeFormatted !== dough.title.toLocaleLowerCase() && dough.rating <= 5){
                            articleSecondary.push(dough);
                        }
                    }
                }

            }
            if(searchedRecipeFormatted === recipeTitle && recipe.category === "mainCourses"){
                articleMain.push(recipe);     
                for(let category of recipes.recipes){
                    for(let mainCourse of category.mainCourses){
                        if(searchedRecipeFormatted !== mainCourse.title.toLocaleLowerCase() && articleMain.length <=2 && mainCourse.rating === 5){
                            articleMain.push(mainCourse);
                        }else if(searchedRecipeFormatted !== mainCourse.title.toLocaleLowerCase() && mainCourse.rating <= 5){
                            articleSecondary.push(mainCourse);
                        }
                    }
                }

            }
            if(searchedRecipeFormatted === recipeTitle && recipe.category === "salads"){
                articleMain.push(recipe);     
                for(let category of recipes.recipes){
                    for(let salad of category.salads){
                        if(searchedRecipeFormatted !== salad.title.toLocaleLowerCase() && articleMain.length <=2 && salad.rating === 5){
                            articleMain.push(salad);
                        }else if(searchedRecipeFormatted !== salad.title.toLocaleLowerCase() && salad.rating <= 5){
                            articleSecondary.push(salad);
                        }
                    }
                }

            }
           
        }
    }
    response.render("pages/search.ejs", {articleMain, articleSecondary});
});

app.get("/sobre", (request, response) =>{
    response.render("pages/about.ejs")
});
app.get("/privacy-policies", (request, response) =>{
    response.render("pages/privacyAndPolicies.ejs")
});

app.get("/contato", (request, response) =>{
    response.render("pages/contact.ejs")
});

// <---------- Categorias das Receitas ---------->
app.get("/categoria/carnes", (request, response) =>{
    const articleMain = [];
    const articleSecondary = [];

    recipes.recipes.forEach(category => {
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

    recipes.recipes.forEach(category => {
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
app.get("/categoria/sobremesas", (request, response) =>{
    const articleMain = [];
    const articleSecondary = [];

    recipes.recipes.forEach(category => {
        for(let dessert of category.desserts){
            if(dessert.rating >= 4  && articleMain.length <= 2){  
                articleMain.push(dessert);
            }else{
                articleSecondary.push(dessert);
            }
        }
    });
    response.render("pages/recipes/dessert.ejs", {articleMain, articleSecondary})
});

// <---------- Carnes ---------->
app.get("/categoria/carne/tambaqui-assado-no-forno", (request, response) =>{
    let tambaqui = {};

    recipes.recipes.forEach(category =>{
        for(let meat of category.salads){
            if(meat.title.includes("Tambaqui")){
                tambaqui = meat;
            }
        }
    });

    response.render("pages/categories/meats/tambaqui.ejs", {tambaqui})
});

// <---------- Massas ---------->
app.get("/categoria/massa/rondelli-presunto-e-queijo", (request, response) =>{
    let rondelli = {};

    recipes.recipes.forEach(category =>{
        for(let dough of category.doughs){
            if(dough.title.includes("Rondelli")){
                rondelli = dough;
            }
        }
    });

    response.render("pages/categories/doughs/rondelli.ejs", {rondelli})
});

// <---------- Sobremesas ---------->
app.get("/categoria/sobremesas/mousse-de-maracuja-com-frutas", (request, response) =>{
    let mousse = {};

    recipes.recipes.forEach(category =>{
        for(let dessert of category.desserts){
            if(dessert.title.includes("Mousse")){
                mousse = dessert; 
            }
        }
    });
    response.render("pages/categories/desserts/mousseMaracuja.ejs", {mousse})
});



// <---------- Sevidor conectado na porta 8080 ---------->
app.listen(8080, () =>{
    console.log('Server listening on port 8080. . .')
})

