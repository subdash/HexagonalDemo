import Database from "../ports/outgoing/Database";

export const fetchCompanyById = async (userId: number, dbService: Database) => {
    return dbService.fetchCompany(userId);
}
