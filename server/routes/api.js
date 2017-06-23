const Router    = require("express").Router;
const db        = require("../utils/db");
const delay     = require("../middleware/artificialDelay");
const Reminder  = require("../database/models/Reminder");
const reminders = db.get("reminders");

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
	try {
		res.send(reminders.insert(req.body).value());
	} catch (err) {
		next(err);
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

export default router;
