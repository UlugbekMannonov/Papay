const Member = require("../models/Member");
const Product = require("../models/Product");

let restaurantController = module.exports;


restaurantController.home = (req, res) => {
  try{
    console.log('Get: cont/home');
    res.render('home-page');
  } catch(err) {
    console.log(`ERROR, cont/home, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
}


restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("Get: cont/getMyRestaurantProducts");
    // TODO: Get my restaurant products
    const product = new Product();
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render("restaurant-menu", { restaurant_data: data });

  } catch (err) {
    console.log(`ERROR, cont/getMyRestaurantProducts, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getSignupMyRestaurant = async (req, res) => {
  try {
    console.log("Get: cont/getSignupMyRestaurant");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR, cont/getSignupMyRestaurant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.signupProccess = async (req, res) => {
  try {
    console.log("POST: cont/signupProccess");
    const data = req.body;
    (member = new Member()), (new_member = await member.signupData(data));

    req.session.member = new_member;
    res.redirect("/resto/products/menu");
    // SESSION AUTHENTATICON
  } catch (err) {
    console.log(`ERROR, cont/signupProccess, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getloginMyRestaurant = async (req, res) => {
  try {
    console.log("Get: cont/getloginMyRestaurant");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR, cont/getloginMyRestaurant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.loginProccess = async (req, res) => {
  try {
    console.log("POST: cont/loginProccess");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    req.session.member = result;
    req.session.save(function () {
      result.mb_type === 'ADMIN' 
      ? res.redirect("/resto/all-restaurant") 
      : res.redirect("/resto/products/menu");
    });
  } catch (err) {
    console.log(`ERROR, cont/loginProccess, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifasidasiz");
};

restaurantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else
    res.json({
      state: "fail",
      message: "only authenticated members with restaurant type",
    });
};

restaurantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "succed", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};
