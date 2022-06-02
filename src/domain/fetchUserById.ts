import Database from "../ports/outgoing/Database";
import {User} from "./models";

export const fetchUserById = async (userId: number, dbService: Database): Promise<User> => {
    return dbService.fetchUserById(userId);
};
