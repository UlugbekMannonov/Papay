const http = require("http");
const mongodb = require("mongodb");
// const express = require("express");
// const app = express();
// const fs = require("fs");

// const { listen } = require("./app");


let db;
const connectionString = "mongodb+srv://mongostas:lSHpiRCAvbpQXiDN@cluster0.gkia0rc.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("Error on connection MongoDB");
    else{
        console.log("MongoDB connection succed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3008;
        server.listen(PORT, function () {
            console.log(
                `The server is running successfully on PORT: ${PORT}, http://localhost${PORT}`
            )
        })
    }
});
