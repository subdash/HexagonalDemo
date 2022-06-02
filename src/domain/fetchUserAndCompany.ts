import {fetchUserById} from "./fetchUserById";
import {fetchCompanyById} from "./fetchCompanyById";
import Database from "../ports/outgoing/Database";
import {Company, User} from "./models";

export const fetchUserAndCompany = async (userId: number, database: Database): Promise<{company: Company, user: User}> => {
    const user = await fetchUserById(userId, database);
    const company = await fetchCompanyById(userId, database);

    return Promise.resolve({
        user,
        company
    });
}
