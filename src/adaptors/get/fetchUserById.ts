import {User} from "../../domain/types";

export const fetchUserById = async (userId: number): Promise<User> => {
    return Promise.resolve({
        id: userId,
        name: 'Dash'
    });
}
