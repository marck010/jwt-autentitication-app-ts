
import * as bodyParser from 'body-parser';
import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as logger from 'morgan';
import { Config } from "./config";

import { Route } from "./src/routers/route";

const routes = new Route().routes

class App {

    app: any = express();

    constructor() {

        this.middlewareBodyparser();

        this.middlewareLogger();
        
        this.middlewareAuthorization();

        this.middlewareRoutes();
    }

    private middlewareRoutes() {
        this.app.use('/', routes);
    }

    private middlewareLogger() {
        this.app.use(logger('dev'));
    }

    private middlewareBodyparser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private middlewareAuthorization() {
        this.app.use(function (req: any, res: any, next: any) {
            let sessionKey: string = req.headers["x-session-key"];
            if (req.path != "/authentication/login") {
                jwt.verify(sessionKey, Config.secret, function (err, decoded) {
                    if (err) {
                        next(err);
                    }
                    else {
                        req.user = { name: decoded.name, login: decoded.login };
                        next();
                    }
                });
            }
            else {
                next();
            }
        });
    }

}


export = new App().app;
