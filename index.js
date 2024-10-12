const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const { readdir } = require("fs/promises");


// Corrected the typo here ("view engine" instead of "veiw engine")
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files});   
        
    })
    
});
app.post('/add-task', function (req, res) {
fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}.txt` , req.body.desc,function(err){
    res.redirect("/")
})
    
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
