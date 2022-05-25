import {User} from "../../domain/types";

export default interface UserService {
    fetchUser: (userId: number) => Promise<User>
};
