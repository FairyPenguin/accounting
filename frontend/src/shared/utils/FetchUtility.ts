import { baseURL } from "../constants";

interface cacheOptionsType {
    cacheOption: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload"
}

export default function APIRequestMethods() {
    /**
     *
     *
     */
    const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwidXVpZCI6ImY1ODAyM2E0LTc0YjYtNDU0ZS1hODM0LTE5YTE1ZDBmNDUzNiIsInRlbmFudElkIjoiMSIsImlhdCI6MTcxNjg5OTYzMCwiZXhwIjozNjE3MTY4OTk2MzB9._r0VEaf8geWUitHjAHG8ce4jrAe7rsOVfclGQCDr6JA";



    // GET Function ==>
    async function GET(endpoint: string, cacheOption: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload", params?: Record<string, any>) {
        return await fetch(endpoint, {
            cache: cacheOption,
            // headers: jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {},
            headers: {
                Authorization: jwtToken ? `Bearer ${jwtToken}` : "",
                "Content-Type": "application/json",
            },

        });
    }

    // // POST Function
    async function POST<PayloadType>(
        endpoint: string,
        payload: PayloadType,
    ) {
        return await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: jwtToken ? `Bearer ${jwtToken}` : "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    }

    // // PUT Function
    async function PUT<PayloadType>(
        endpoint: string,
        payload: PayloadType,
    ) {
        return await fetch(endpoint, {
            method: 'PUT',
            headers: {
                Authorization: jwtToken ? `Bearer ${jwtToken}` : "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    }


    // // PATCH Function
    // async function PATCH<APIResponseType, P = unknown>(endpoint: string, payload: P): Promise<APIResponseType> {
    //     return await axios.patch(`${baseURL}/${endpoint}`, payload, {
    //         headers: jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {},
    //     });
    // }

    // // DELETE Function
    // async function DELETE<APIResponseType>(endpoint: string): Promise<APIResponseType> {
    //     return await axios.delete(`${baseURL}/${endpoint}`, {
    //         headers: jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {},
    //     });
    // }

    // Returned object with functions as values
    return {
        GETMethod: GET,

        POSTMethod: POST,

        PUTMethod: PUT,

        // PATCHMethod: PATCH,

        // DELETEMethod: DELETE,
    };
}
