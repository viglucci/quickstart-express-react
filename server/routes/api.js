const Router    = require("express").Router;
const db        = require("../utils/db");
const delay     = require("../middleware/artificialDelay");
const Reminder  = require("../database/models/Reminder");
const reminders = db.get("reminders");
const moment    = require("moment");

const router = Router();

//router.use(delay);

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
	req.assert("date", "Date is a required field.").notEmpty();
	req.assert("time", "Time is a required field.").notEmpty();
	const errors = req.validationErrors();
	if (errors) {
		res.status(400).json({
			errors: errors
		});
	} else {
		let date = req.body.date.split(/:(.+)/)[0];
		let time = req.body.time.split(/:(.+)/)[1];
		const when = new Date(`${date}:${time}`);
		const reminder = new Reminder({
			title: req.body.title,
			when: when
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
