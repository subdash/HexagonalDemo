import express from 'express';
import {handler as userByIdHandler} from "./adaptors/fetchUserById";
import {HTTPRequest} from "./domain/types";
import {handler as userAndCompanyHandler} from "./adaptors/fetchUserAndCompany";

const app = express();
const port = 8081;

// GET a user
app.get( "/users/:userId", async (req: any, res: any) => {
    const {userId} = req.params;
    const response = await userByIdHandler({
        method: 'GET',
        pathParameters: { userId },
        route: `/users/${userId}`
    } as HTTPRequest);

    res.status(response.statusCode).json(response.body);
} );

// GET a user and their company
app.get( "/users/:userId/company", async (req: any, res: any) => {
    const {userId} = req.params;
    const response = await userAndCompanyHandler({
        method: 'GET',
        pathParameters: { userId },
        route: `/users/${userId}/company`
    } as HTTPRequest);

    res.status(response.statusCode).json(response.body);
} );


app.listen(port, () => {});

export default app;
