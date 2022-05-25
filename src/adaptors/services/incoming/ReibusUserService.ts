import UserService from "../../../ports/incoming/UserService";
import {User} from "../../../domain/types";
import {fetchUserById} from "../../../domain/fetchUserById";
import {reibusUserService as outgoingReibusUserService} from "../outgoing/ReibusUserService";

class ReibusUserService implements UserService {
    async fetchUser(userId: number): Promise<User> {
        return fetchUserById(userId, outgoingReibusUserService)
    }
}

export const reibusUserService = new ReibusUserService();
