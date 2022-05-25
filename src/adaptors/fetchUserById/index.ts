import {HTTPRequest, HTTPResponse, User} from "../../domain/types";
import {fetchUserById} from "./functions/fetchUserById";

export const handler = async (request: HTTPRequest): Promise<HTTPResponse> => {
    try {
        const user = await fetchUserById(request);
        return {
            statusCode: 200,
            body: {
                user
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