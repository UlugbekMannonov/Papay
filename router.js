const express = require("express");
const router = express.Router();
const memberController = require('./controllers/memberController'); 


// Memberga dahildor routerlar
router.get("/", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);


// Boshqa routerlar
router.get("/menu", (req, res) => {
    res.send("Menu sahifasidasiz")
});

router.get("/community", (req, res) => {
    res.send("Jamiyat sahifasidasiz")
});

module.exports = router;