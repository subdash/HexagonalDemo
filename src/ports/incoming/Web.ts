import {User} from "../../domain/models";
import {Company} from "../../domain/models";

export default interface Web {
    fetchUser: (userId: number) => Promise<User>
    fetchUserAndCompany: (userId: number) => Promise<{user: User; company: Company}>
};
