const express = require('express');

const app = express();

//engine para entender o ejs na pasta views
app.use("view engine", "ejs");

app.listen(3333, () =>{
    console.log('Server listening on port 3333. . .')
})

