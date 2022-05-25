import {User} from "../../domain/types";
import {Company} from "../../domain/types";

export default interface Web {
    fetchUser: (userId: number) => Promise<User>
    fetchUserAndCompany: (userId: number) => Promise<{user: User; company: Company}>
};
