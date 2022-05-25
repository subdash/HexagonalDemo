import UserService from "../../../ports/outgoing/UserService";
import {User} from "../../../domain/types";
import {fetchUserById} from "../../get/fetchUserById";

export class ReibusUserService implements UserService {
    async fetchUserById(userId: number): Promise<User> {
        return fetchUserById(userId);
    }
}

export const reibusUserService = new ReibusUserService();
