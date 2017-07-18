const express      = require("express");
const validator    = require("express-validator");
const logger       = require("morgan");
const compression  = require("compression");
const cookieParser = require("cookie-parser");
const bodyParser   = require("body-parser");
const mime         = require("mime");
const path         = require("path");

const config = require("./app.config");
const pages  = require("./routes/pages");
const api    = require("./routes/api");
const error  = require("./routes/error");
const db     = require("./database");

const app = express();

app.locals.static = config.static;

app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

app.use(logger("dev"));

app.use(config.static.root, express.static(`${path.join(__dirname, "..", "public")}`, {
	setHeaders: (res, path) => {
		if (path.endsWith(".gz")) {
			res.set("Content-Encoding", "gzip");
			res.type(mime.lookup(path.slice(0, -3)));
		}
	}
}));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());

app.use(pages);
app.use(api);
app.use(error);

app.listen(config.port, config.host, () => {
	console.log(`Application listening on ${config.host}:${config.port}...`);
});
