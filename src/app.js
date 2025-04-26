const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello from the test");
});

app.use((req, res) => {
    res.send("hello from server");
})

app.listen(7777, () => {
    console.log("Server is Listening port 7777.....");
});
