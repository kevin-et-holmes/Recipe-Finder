const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

let publicPath = path.join(__dirname,)

const uri = "mongodb+srv://kevinholmes921:koolmanjoe2W@@cluster0.fzqsyjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connect() {
    try {
        await mongoose.connect(uri)
    console.log("connected to MongoDB")}
    catch (error) {
        console.error(error)
    }
}

app.use('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
    
    
})

function getRecipe () {
    let ingredients = document.getElementById('searchInput').value;
    ingredients = ingredients.split(',');
    
    document.getElementById("result").textContent = ingredients
}

app.listen(3000, () => {console.log("server is now running on port 3000")})

