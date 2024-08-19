import JWT_TOKEN from "@/shared/constants/Tokens";
import { ApiBaseURL } from "@/shared/constants/APIURLs";

export interface ClientByUUID {
    createdAt: Date;
    updatedAt: Date;
    uuid: string;
    id: number;
    name: string;
    email: string;
    contactNumber: string;
    taxNo: string;
    taxNo2: string;
    individual: boolean;
    source: string;
    note: string;
    deletedAt: Date;
    currencyId: number,
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data?: ClientByUUID;
    };
}

async function getClientByUUID(UUID: string): Promise<APIResponseType> {
    const response = await fetch(`${ApiBaseURL}/clients/${UUID}`, {
        headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
        },
    });


    if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();

    return { data };
}


export default getClientByUUID;
