import express from 'express';
import {handler as userByIdHandler} from "./adaptors/fetchUserById";
import {HTTPRequest} from "./domain/types";
import {handler as userAndCompanyHandler} from "./adaptors/fetchUserAndCompany";

const app = express();
const port = 8081;

app.get( "/users/:userId", async ( req: any, res: any ) => {
    const {userId} = req.params;
    const response = await userByIdHandler({
        method: 'GET',
        pathParameters: { userId },
        route: `/users/${userId}`
    } as HTTPRequest);
    res.status(response.statusCode).json(response.body);
} );

app.get( "/users/:userId/company", async ( req: any, res: any ) => {
    const {userId} = req.params;
    const response = await userAndCompanyHandler({
        method: 'GET',
        pathParameters: { userId },
        route: `/users/${userId}/company`
    } as HTTPRequest);
    res.status(response.statusCode).json(response.body);
} );

// start the Express server
app.listen( port, () => {
    // console.log( `server started at http://localhost:${ port }` );
} );

export default app;
