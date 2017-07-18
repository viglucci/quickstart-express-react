module.exports = class ApplicationError extends Error {
	constructor(status, message) {
		super(message);
		this.status = status;
	}
};
