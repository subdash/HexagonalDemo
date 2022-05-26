import {HTTPRequest, HTTPResponse} from "../../../domain/types";
import {fetchUserAndCompany} from "./functions/fetchUserAndCompany";

export const handler = async (request: HTTPRequest): Promise<HTTPResponse> => {
    try {
        const { user, company } = await fetchUserAndCompany(request);
        return {
            statusCode: 200,
            body: {
                user,
                company
            }
        }
    } catch (e) {
        // console.error(e);
        return Promise.resolve({
            statusCode: 404,
            message: 'User not found.'
        });
    }
}
