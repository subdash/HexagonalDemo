import {Company} from "../../domain/types";

export const fetchCompanyById = async (userId: number): Promise<Company> => {
    return Promise.resolve({
        id: userId,
        name: 'Dash Company',
        subsidiary: 'Dash USA'
    });
}
