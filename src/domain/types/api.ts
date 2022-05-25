export type HTTPRequest = {
    method: string;
    route: string;
    pathParameters: object;
}

export type HTTPResponse = {
    statusCode: number;
    message?: string;
    body?: any;
}