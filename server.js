const express = require('express');
const { request } = require('http');

const app = express();

//engine para entender o ejs na pasta views
app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (request, response) =>{
    response.render("pages/index.ejs")
});


app.get("/sobre", (request, response) =>{
    response.render("pages/about.ejs")
});

app.get("/contato", (request, response) =>{
    response.render("pages/contact.ejs")
});

// <---------- Categorias das Receitas ---------->
app.get("/categoria/carnes", (request, response) =>{
    response.render("pages/meat.ejs")
});

// <---------- Carnes ---------->
app.get("/categoria/carne/tambaqui-assado-no-forno", (request, response) =>{
    response.render("pages/categories/meats/tambaqui.ejs")
});

// <---------- Sevidor conectado na porta 8080 ---------->
app.listen(8080, () =>{
    console.log('Server listening on port 8080. . .')
})

