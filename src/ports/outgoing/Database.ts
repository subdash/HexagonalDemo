import {User} from "../../domain/models";
import {Company} from "../../domain/models";

export default interface Database {
    fetchUserById: (userId: number) => Promise<User>
    fetchCompany: (userId: number) => Promise<Company>
}
