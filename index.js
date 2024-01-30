const express = require("express");
const app = express();
const port = rocess. env. PORT || 2421;
require("./database/connection")
const router = require("./router/routes")

app.use("/" , router);



app.listen(port , ()=>{
    console.log(`Server is Started in port ${port}`);
})