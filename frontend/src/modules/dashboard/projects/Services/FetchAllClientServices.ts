import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface ClientService {
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
            data: ClientService[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllClientServices(): Promise<APIResponseType | undefined> {
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
    }
}

async function ClientServicesFetcher(): Promise<ClientService[]> {
    const clientServices = await getAllClientServices();

    if (clientServices && clientServices.data && clientServices.data.data && clientServices.data.data.data) {
        // console.log(clientServices.data.data.data);
        return clientServices.data.data.data;
    } else {
        console.log("Error--Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(clientServices);
}

export default ClientServicesFetcher;
