import UserService from "../ports/outgoing/UserService";

export const fetchCompanyById = async (userId: number, userService: UserService) => {
    return userService.fetchCompany(userId);
}
