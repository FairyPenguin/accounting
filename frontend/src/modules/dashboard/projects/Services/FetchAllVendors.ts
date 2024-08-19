import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Vendor {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    tenantId: string;
    countryId: null;
    type: string;
    contactNumber: null;
    note: null;
    userId: string;
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Vendor[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllVendors(searchValue?: string): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            `vendors?page=1&limit=100&search=${searchValue ? String(searchValue) : ""}&searchBy=name`,
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

async function vendorsFetcher(searchValue?: string): Promise<Vendor[]> {
    try {
        const response = await getAllVendors(searchValue);

        if (response && response.data && response.data.data) {
            return response.data.data.data;
        } else {
            console.error("Failed to fetch vendors:", response.data.message);
            return [];
        }
    } catch (error) {
        console.error("Error fetching vendors...", error);
        return []; // Return an empty array in case of an error
    }
}

export default vendorsFetcher;


