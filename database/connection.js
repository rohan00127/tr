const mongo = require("mongoose");

mongo.connect("mongodb+srv://rohanmakvana90:rohan2421@cluster0.neijrs2.mongodb.net/library?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database is Connected");
}).catch((err)=>{
    console.log(err)
})

