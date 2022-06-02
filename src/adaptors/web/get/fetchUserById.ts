import {User} from "../../../domain/models";

export const fetchUserById = async (userId: number): Promise<User> => {
    return Promise.resolve({
        id: userId,
        name: 'Dash'
    });
}
