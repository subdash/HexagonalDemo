import Web from "../../../../ports/incoming/Web";
import {Company, User} from "../../../../domain/models";
import {fetchUserById} from "../../../../domain/fetchUserById";
import {postgresService} from "../../../database/services/outgoing/PostgresService";
import {fetchUserAndCompany} from "../../../../domain/fetchUserAndCompany";

class WebService implements Web {
    async fetchUser(userId: number): Promise<User> {
        return fetchUserById(userId, postgresService)
    }

    async fetchUserAndCompany(userId: number): Promise<{ user: User; company: Company }> {
        return fetchUserAndCompany(userId, postgresService);
    }
}

export const webService = new WebService();
