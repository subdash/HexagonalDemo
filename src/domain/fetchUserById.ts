import Database from "../ports/outgoing/Database";
import {User} from "./types";

export const fetchUserById = async (userId: number, dbService: Database): Promise<User> => {
    return dbService.fetchUserById(userId);
};
