import * as express from 'express';

import {AuthenticationController} from "../controllers/autentication-controller";
const authenticationController = new AuthenticationController()

import {UserController} from "../controllers/user-controller";
const userController = new UserController()

export class Route {
    routes = express.Router();

    constructor() {
        this.routes.post('/authentication/login', authenticationController.login);
        this.routes.get('/user/getUser', userController.getUser);

    }
}


