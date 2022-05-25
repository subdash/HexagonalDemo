import {Company, HTTPRequest, User} from "../../../domain/types";
import {reibusUserService} from "../../services/incoming/ReibusUserService";

export const fetchUserAndCompany = async (request: HTTPRequest): Promise<{ user: User; company: Company }> => {
    const {userId} = request.pathParameters as {userId: number};
    return reibusUserService.fetchUserAndCompany(userId);
}
