
export class UserController {

    getUser(req: any, res: any) {

        try {
            res.json(req.user);

        } catch (error) {
            throw new Error(error);
        }
    }
}
