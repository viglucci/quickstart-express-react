const Router = require("express").Router;

const router = Router();

router.get("/", (req, res, next) => {
	res.render("home", { title: "Quickstart" });
});

router.get("/app", (req, res, next) => {
	res.render("app");
});

module.exports = router;
