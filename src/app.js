const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//     res.send("hello from server");
// })


// app.use("/test", (req, res) => {
//     res.send("Hello from the test");
// });


app.get("/user", (req, res) =>{
    res.send({first_name: 'Harshit', Last_name: "Sharma"});

});

app.post("/user", (req, res) =>{
    res.send("data successfully saved in the database");
});

app.delete("/user", (req, res) => {
    res.send("data deleted successfully");
});


app.listen(7777, () => {
    console.log("Server is Listening port 7777.....");
});
