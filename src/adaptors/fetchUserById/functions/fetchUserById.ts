import {HTTPRequest, User} from "../../../domain/types";
import {webService} from "../../services/incoming/WebService";

export const fetchUserById = async (request: HTTPRequest): Promise<User> => {
    const {userId} = request.pathParameters as {userId: number};
    return webService.fetchUser(userId);
}
