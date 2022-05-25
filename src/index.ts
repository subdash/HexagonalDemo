import express from 'express';
import {handler} from "./adaptors/fetchUserById";
import {HTTPRequest} from "./domain/types";

const app = express();
const port = 8081;

app.get( "/users/:userId", async ( req: any, res: any ) => {
    const {userId} = req.params;
    const response = await handler({
        method: 'GET',
        pathParameters: { userId },
        route: `/users/${userId}`
    } as HTTPRequest);
    res.status(response.statusCode).json(response.body);
} );

// start the Express server
app.listen( port, () => {
    // console.log( `server started at http://localhost:${ port }` );
} );

export default app;
