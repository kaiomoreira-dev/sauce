const express = require('express');
const { request } = require('http');

const app = express();

//engine para entender o ejs na pasta views
app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (request, response) =>{
    response.render("pages/index.ejs")
});

app.get("/meat", (request, response) =>{
    response.render("pages/meat.ejs")
});

app.get("/about", (request, response) =>{
    response.render("pages/about.ejs")
});

app.listen(8080, () =>{
    console.log('Server listening on port 8080. . .')
})

