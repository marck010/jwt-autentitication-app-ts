import {users} from "../database/users.json"

import * as _ from "underscore";

export class AuthenticationRepository {

    async login(login, password) {
        return await Promise.resolve(_.find(users, x => x.login == login && x.password == password));
    }

}
