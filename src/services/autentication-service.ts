import { AuthenticationRepository } from "../repositories/authentication-repository";
const authenticationRepository = new AuthenticationRepository();

export class AuthenticationService {

    async login(login: string, password: string) {

        let user = await authenticationRepository.login(login, password);

        if (user) {
            return user;
        }
        else {
            throw new Error("Invalid user")
        }

    }
}
