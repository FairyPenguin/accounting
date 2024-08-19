import APIRequestMethods from "@/shared/utils/FetchUtility";
import { Unit } from "./FetchAllCalculationUnits";
import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";
import { Vendor } from "./FetchAllVendors";

export interface TaskByUUID {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    jobId: string;
    calculationUnitId: string;
    description: string;
    startDate: Date;
    endDate: Date;
    vendorId: string;
    workQuantity: number;
    deletedAt: null;
    vendor: Vendor;
    calculationUnit: Unit;
}


export interface APIResponseType {
    success: boolean;
    message: string;
    data?: TaskByUUID;
}

async function getSingleTaskByUUID(UUID: string): Promise<TaskByUUID | undefined> {
    try {
        const response = await APIRequestMethods().GETMethod(
            `${ApiURLWithUUID("tasks", UUID)}`, "no-store"
        );

        const responseData: APIResponseType = await response.json();



        if (!responseData.success) {
            console.error(responseData.success, responseData.message);
        }

        if (responseData.data && responseData.success) {
            return responseData.data
        }

        return undefined
    } catch (error) {
        console.error("Failed to fetch task data.... Read the error message below ==>\n", error);

    }
}



export default getSingleTaskByUUID;





