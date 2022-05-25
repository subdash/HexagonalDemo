import UserService from "../../../ports/outgoing/UserService";
import {Company, User} from "../../../domain/types";
import {fetchUserById} from "../../get/fetchUserById";
import {fetchCompanyById} from "../../get/fetchCompanyById";

export class ReibusUserService implements UserService {
    async fetchUserById(userId: number): Promise<User> {
        return fetchUserById(userId);
    }

    async fetchCompany(userId: number): Promise<Company> {
        return fetchCompanyById(userId);
    }
}

export const reibusUserService = new ReibusUserService();
