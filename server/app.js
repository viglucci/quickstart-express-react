import express      from "express";
import logger       from "morgan";
import compression  from "compression";
import cookieParser from "cookie-parser";
import bodyParser   from "body-parser";
import mime         from "mime";
import path         from "path";

import config from "./app.config";
import pages  from "./routes/pages";
import api    from "./routes/api";
import error  from "./routes/error";

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
app.use(cookieParser());

app.use(pages);
app.use(api);
app.use(error);

app.listen(config.port, config.host, () => {
  console.log(`Application listening on ${config.host}:${config.port}...`);
});
