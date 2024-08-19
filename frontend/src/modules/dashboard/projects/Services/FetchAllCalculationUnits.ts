import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Unit {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    exchangeRatio: string;
    type: string;
    tenantId: string;
    active: boolean;
    default: boolean;
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Unit[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllCalculationUnits(): Promise<APIResponseType | undefined> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            "calculation-unit?page=1&limit=50",
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

async function unitsFetcher(): Promise<Unit[]> {
    const units = await getAllCalculationUnits();

    if (units && units.data && units.data.data && units.data.data.data) {
        // console.log(units.data.data.data);
        return units.data.data.data;
    } else {
        console.log("Error--Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(units);
}

export default unitsFetcher;
