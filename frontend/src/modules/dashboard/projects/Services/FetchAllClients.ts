import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Client {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: null;
    contactNumber: null;
    taxNo: null;
    taxNo2: null;
    individual: boolean;
    countryId: string;
    state: null;
    currencyId: null;
    accountManagerId: null;
    source: null;
    salesPersonId: null;
    tenantId: string;
    note: null;
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Client[];
            totalCount: number;
            totalPage: number;
        };
    };
}

export async function getAllClients(): Promise<APIResponseType | undefined> {
    try {
        const response: APIResponseType =
            await APIFunctionalUtility().GETMethod<APIResponseType>("clients?page=1&limit=25");

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

async function clientsFetcher(): Promise<Client[]> {
    const clients = await getAllClients();

    if (clients && clients.data && clients.data.data && clients.data.data.data) {
        // console.log(clients.data.data.data);
        return clients.data.data.data;
    } else {
        console.log("Error-from=>clientsFetcher() Func=>-Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(clients);
}

export default clientsFetcher;
