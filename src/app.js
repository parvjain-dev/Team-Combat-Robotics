const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT||3000;

//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");


app.set('view engine' , 'hbs');
app.set('views' , template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));



//routing
app.get("/", (req,res) =>{
res.render('index');
})
app.get("/Team", (req,res) =>{
    res.render('Team.hbs');
    })
app.get("/work", (req,res) =>{
    res.render('work.hbs');
    })
app.get("/*", (req,res) =>{
    res.render('404error');
    })

app.listen(port , () =>{
    console.log(`app is listening on port ${port}`);
})