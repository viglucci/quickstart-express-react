const Router           = require("express").Router;
const ApplicationError = require ("../utils/ApplicationError");

const router = Router();

router.use((req, res, next) => {
	next(new ApplicationError(404));
});

router.use((error, req, res, next) => {
	res.status(error.status || 500);
	if (req.xhr) {
		res.end();
	} else {
		res.render("error", {
			title: error.message || (error.status == 404 ? "Not Found" : "Server Error"),
			error
		});
	}
});

module.exports = router;
