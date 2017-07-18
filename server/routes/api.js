const Router    = require("express").Router;
const db        = require("../utils/db");
const delay     = require("../middleware/artificialDelay");
const Reminder  = require("../database/models/Reminder");
const reminders = db.get("reminders");
const Joi       = require("joi");

const router = Router();

//router.use(delay);

const validateNewReminder = (body) => {
	const schema = Joi.object().keys({
		title: Joi.string().min(1).max(255).required()
	});
	return Joi.validate({ title: body.title }, schema);
};

router.get("/api/reminders", (req, res, next) => {
	Reminder
	.fetchAll()
	.then(function (reminders) {
		res.json(reminders);
	})
	.catch(next);
});

router.post("/api/reminders", (req, res, next) => {
	req.assert("title", "Title is a required field.").notEmpty();
	const errors = req.validationErrors();
	if (errors) {
		res.status(400).json({
			errors: errors
		});
	} else {
		const reminder = new Reminder({
			title: req.body.title
		});
		reminder.save()
		.then(function () {
			res.json(reminder);
		})
		.catch(next);
	}
});

router.put("/api/reminders/:id", (req, res, next) => {
	try {
		res.send(reminders.updateById(req.params.id, req.body).value());
	} catch (err) {
		next(err);
	}
});

router.delete("/api/reminders/:id", (req, res, next) => {
	Reminder
	.where("id", req.params.id)
	.fetch()
	.then(function (reminder) {
		return reminder.destroy();
	})
	.then(function () {
		res.sendStatus(204);
	})
	.catch(next);
});

module.exports = router;
