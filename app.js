console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr");


// 1. Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2. Session codes

// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Routing code
app.use("/resto", router_bssr);  //Ananaviy
app.use("/", router);            // rest API React


module.exports = app;
