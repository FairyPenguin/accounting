import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Account {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    // lookupType: string;
    // active: boolean;
    // default: boolean;
    // tenantId: string;
    deletedAt: null;

    referenceNumber: string;
    description: string;
    status: string;
    type: string;
    balance: string;
    parentId: number
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Account[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllAccounts(): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            `lookups?page=1&limit=50&lookupType=account`,
        );

        if (!response.data.success) {
            console.error(response.data.message);
        }

        return response;
    } catch (error) {
        console.error(error);

        return {
            data: {
                success: false,
                message: "Failed to fetch vendors.....",
                data: {
                    data: [],
                    totalCount: 0,
                    totalPage: 0,
                },
            },
        };
    }
}

async function accountsFetcher(): Promise<Account[]> {
    try {
        const response = await getAllAccounts();

        if (response && response.data && response.data.data) {
            return response.data.data.data;
        } else {
            console.error("Failed to fetch accounts:", response.data.message);
            return [];
        }
    } catch (error) {
        console.error("Error fetching accounts...", error);
        return []; // Return an empty array in case of an error
    }
}

export default accountsFetcher;
