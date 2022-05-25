import Database from "../../../ports/outgoing/Database";
import {Company, User} from "../../../domain/types";
import {fetchUserById} from "../../get/fetchUserById";
import {fetchCompanyById} from "../../get/fetchCompanyById";

export class DatabaseService implements Database {
    async fetchUserById(userId: number): Promise<User> {
        return fetchUserById(userId);
    }

    async fetchCompany(userId: number): Promise<Company> {
        return fetchCompanyById(userId);
    }
}

export const databaseService = new DatabaseService();
