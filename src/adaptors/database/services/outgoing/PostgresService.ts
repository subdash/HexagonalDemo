import Database from "../../../../ports/outgoing/Database";
import {Company, User} from "../../../../domain/models";
import {fetchUserById} from "../../../web/get/fetchUserById";
import {fetchCompanyById} from "../../../web/get/fetchCompanyById";

export class PostgresService implements Database {
    async fetchUserById(userId: number): Promise<User> {
        return fetchUserById(userId);
    }

    async fetchCompany(userId: number): Promise<Company> {
        return fetchCompanyById(userId);
    }
}

export const postgresService = new PostgresService();
