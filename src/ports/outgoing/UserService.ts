import {User} from "../../domain/types";

export default interface UserService {
    fetchUserById: (id: number) => Promise<User>
}
