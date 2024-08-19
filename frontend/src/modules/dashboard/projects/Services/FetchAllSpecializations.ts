import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Speciality {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    lookupType: string;
    active: boolean;
    default: boolean;
    tenantId: string;
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            specialization: Speciality[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllSpecializations(): Promise<APIResponseType | undefined> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>("lookups/list");

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

async function SpecializationsFetcher(): Promise<Speciality[]> {
    const specializations = await getAllSpecializations();

    if (
        specializations &&
        specializations.data &&
        specializations.data.data &&
        specializations.data.data.specialization
    ) {
        // console.log(specializations.data.data.specialization);
        return specializations.data.data.specialization;
    } else {
        console.log("Error--Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(specializations);
}

export default SpecializationsFetcher;
