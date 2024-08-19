import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Service {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    active: boolean;
    tenantId: string;
    default: boolean;
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Service[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllServices(): Promise<APIResponseType | undefined> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            "services?page=1&limit=50",
        );

        return response;
    } catch (error) {
        console.error(error);

        if (error === "Error: connect ECONNREFUSED 168.119.100.87:8000") {
            console.error("Server is Down");
            return undefined;
        }
        // throw new Error(`Server is Down`);
        // throw error;
    }
}

async function servicesFetcher(): Promise<Service[]> {
    const clients = await getAllServices();

    if (clients && clients.data && clients.data.data && clients.data.data.data) {
        // console.log(clients.data.data.data);
        return clients.data.data.data;
    } else {
        console.log("Error: -->Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(clients);
}

export default servicesFetcher;
