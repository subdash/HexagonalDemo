import {User} from "../../domain/types";
import {Company} from "../../domain/types";

export default interface UserService {
    fetchUserById: (userId: number) => Promise<User>
    fetchCompany: (userId: number) => Promise<Company>
}
