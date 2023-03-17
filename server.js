const express = require('express');
const { request } = require('http');

const app = express();

//engine para entender o ejs na pasta views
app.set("view engine", "ejs");
app.use(express.static("views/css"));
app.use(express.static("views/script"));
app.use(express.static("views/images"));


app.get("/", (request, response) =>{
    response.render("pages/index.ejs")
});

app.listen(8080, () =>{
    console.log('Server listening on port 8080. . .')
})

