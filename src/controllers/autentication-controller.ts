
import { AuthenticationService } from "../services/autentication-service";
const authenticationService = new AuthenticationService ();

import * as jwt from 'jsonwebtoken';
import { Config } from "../../config"

export class AuthenticationController {

    async login(req: any, res: any, next: any) {

        try {
            let login: string = req.body.login;
            let password: string = req.body.password;

            let user = await authenticationService.login(login, password);

            var token = jwt.sign({ name: user.name, login: user.login }, Config.secret);

            res.json(token);

        } catch (error) {
            next(error);
        }
    }
}
