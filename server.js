const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("congrats, you just created your first node app");
})

app.listen(PORT,() => {
    console.log("server is running on PORT " + PORT);
})