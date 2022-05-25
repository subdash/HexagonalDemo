import {HTTPRequest, User} from "../../../domain/types";
import {reibusUserService} from "../../services/incoming/ReibusUserService";

export const fetchUserById = async (request: HTTPRequest): Promise<User> => {
    const {userId} = request.pathParameters as {userId: number};
    return reibusUserService.fetchUser(userId);
}
