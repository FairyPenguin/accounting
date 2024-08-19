import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface PM {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    emailVerifiedAt: null;
    active: boolean;
    gender: string;
    address: null;
    phone: null;
    skypeId: null;
    roleId: string;
    tenantId: string;
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: PM[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllPMs(): Promise<PM[]> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            "users?page=1&limit=50&orderBy=createdAt&order=DESC",
        );

        if (!response.data.data && !response.data.success) {
            console.error(response.data.success + response.data.message)
        }
        return response.data.data.data;
    } catch (error) {
        console.error(error);

        throw new Error(`${error}`);
    }
}

export default getAllPMs;
