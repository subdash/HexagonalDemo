import UserService from "../ports/outgoing/UserService";
import {User} from "./types";

export const fetchUserById = async (userId: number, userService: UserService): Promise<User> => {
    return userService.fetchUserById(userId);
};
