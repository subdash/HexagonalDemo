import UserService from "../../../ports/incoming/UserService";
import {Company, User} from "../../../domain/types";
import {fetchUserById} from "../../../domain/fetchUserById";
import {reibusUserService as outgoingReibusUserService} from "../outgoing/ReibusUserService";
import {fetchCompanyById} from "../../../domain/fetchCompanyById";

class ReibusUserService implements UserService {
    async fetchUser(userId: number): Promise<User> {
        return fetchUserById(userId, outgoingReibusUserService)
    }

    async fetchUserAndCompany(userId: number): Promise<{ user: User; company: Company }> {
        const user = await fetchUserById(userId, outgoingReibusUserService);
        const company = await fetchCompanyById(userId, outgoingReibusUserService);

        return Promise.resolve({
            user,
            company
        });
    }
}

export const reibusUserService = new ReibusUserService();
