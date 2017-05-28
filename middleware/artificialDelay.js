const randomDelay = () => {
	const max = 2000;
	const min = 250;
	return Math.floor(Math.random() * (max - min) + min);
};

module.exports = function (req, res, next) {
	let originalSendStatus = res.sendStatus.bind(res);
	res.sendStatus = (status) => {
		let delay = randomDelay();
		console.log(`delaying response for ${delay}`);
		setTimeout(() => {
			res.sendStatus = originalSendStatus;
			res.sendStatus(status);
		}, delay);
	};

	let originalSend = res.send.bind(res);
	res.send = (body) => {
		let delay = randomDelay();
		console.log(`delaying response for ${delay}`);
		setTimeout(() => {
			res.send = originalSend;
			res.send(body);
		}, delay);
	};

	next();
};
