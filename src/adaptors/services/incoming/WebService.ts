import Web from "../../../ports/incoming/Web";
import {Company, User} from "../../../domain/types";
import {fetchUserById} from "../../../domain/fetchUserById";
import {databaseService} from "../outgoing/DatabaseService";
import {fetchCompanyById} from "../../../domain/fetchCompanyById";

class WebService implements Web {
    async fetchUser(userId: number): Promise<User> {
        return fetchUserById(userId, databaseService)
    }

    async fetchUserAndCompany(userId: number): Promise<{ user: User; company: Company }> {
        const user = await fetchUserById(userId, databaseService);
        const company = await fetchCompanyById(userId, databaseService);

        return Promise.resolve({
            user,
            company
        });
    }
}

export const webService = new WebService();
