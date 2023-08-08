console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr");
const cors = require("cors");
const cookieParser = require("cookie-parser");

let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: "session",
});


// 1. Kirish codelari
app.use(express.static("public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());

// 2. Session codes
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 30, // for 30 minutes
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(function(req, res, next) {q
    res.locals.member = req.session.member;
    next();
});




// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Routing code
app.use("/resto", router_bssr);  //Ananaviy
app.use("/", router);            // rest API React


module.exports = app;
