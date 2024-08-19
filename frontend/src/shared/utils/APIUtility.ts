import axios from "axios";
import { baseURL } from "../constants";

export default function APIFunctionalUtility() {
    /**
     *
     *
     */
    const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwidXVpZCI6ImY1ODAyM2E0LTc0YjYtNDU0ZS1hODM0LTE5YTE1ZDBmNDUzNiIsInRlbmFudElkIjoiMSIsImlhdCI6MTcxNjg5OTYzMCwiZXhwIjozNjE3MTY4OTk2MzB9._r0VEaf8geWUitHjAHG8ce4jrAe7rsOVfclGQCDr6JA";

    // GET Function
    async function GET<APIResponseType>(endpoint: string, params?: Record<string, any>): Promise<APIResponseType> {
        return await axios.get(`${baseURL}/${endpoint}`, {
            params,
            headers: jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {},
        });
    }

    // POST Function
    async function POST<APIResponseType, P = unknown>(
        endpoint: string,
        payload: P,
        headers: any = {},
    ): Promise<APIResponseType> {
        return await axios.post(`${baseURL}/${endpoint}`, payload, {
            headers: { ...headers, ...(jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {}) },
        });
    }

    // PUT Function
    async function PUT<APIResponseType, P = unknown>(endpoint: string, payload: P): Promise<APIResponseType> {
        return await axios.put(`${baseURL}/${endpoint}`, payload, {
            headers: jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {},
        });
    }

    // PATCH Function
    async function PATCH<APIResponseType, P = unknown>(endpoint: string, payload: P): Promise<APIResponseType> {
        return await axios.patch(`${baseURL}/${endpoint}`, payload, {
            headers: jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {},
        });
    }

    // DELETE Function
    async function DELETE<APIResponseType>(endpoint: string): Promise<APIResponseType> {
        return await axios.delete(`${baseURL}/${endpoint}`, {
            headers: jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {},
        });
    }

    // Returned object with functions as values
    return {
        GETMethod: GET,

        POSTMethod: POST,

        PUTMethod: PUT,

        PATCHMethod: PATCH,

        DELETEMethod: DELETE,
    };
}
