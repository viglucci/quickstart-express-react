import { Router } from "express";
import db from "../utils/db";

const reminders = db.get("reminders");

const router = Router();

const randomDelay = () => {
	const max = 2000;
	const min = 250;
	return Math.random() * (max - min) + min
};

router.get("/api/reminders", (req, res, next) => {
	try {
		setTimeout(() => {
			let data = reminders.map(item => db._.pick(item, "id", "title", "when")).value();
			res.send(data);
		}, randomDelay());
	} catch (err) {
		next(err);
	}
});

router.post("/api/reminders/:id", (req, res, next) => {
	try {
		res.send(reminders.updateById(req.params.id, req.body).value());
	} catch (err) {
		next(err);
	}
});

router.put("/api/reminders", (req, res, next) => {
	try {
		res.send(reminders.insert(req.body).value());
	} catch (err) {
		next(err);
	}
});

router.delete("/api/reminders/:id", (req, res, next) => {
	try {
		reminders.removeById(req.params.id).value();
		setTimeout(() => {
			res.sendStatus(204);
		}, randomDelay());
	} catch (err) {
		next(err);
	}
});

export default router;
