import {Company, HTTPRequest, User} from "../../../../domain/types";
import {webService} from "../../services/incoming/WebService";

export const fetchUserAndCompany = async (request: HTTPRequest): Promise<{ user: User; company: Company }> => {
    const {userId} = request.pathParameters as {userId: number};
    return webService.fetchUserAndCompany(userId);
}
