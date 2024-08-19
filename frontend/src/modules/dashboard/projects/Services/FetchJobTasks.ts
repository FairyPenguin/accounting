import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";
import { Unit } from "./FetchAllCalculationUnits";
import { Vendor } from "./FetchAllVendors";
import APIRequestMethods from "@/shared/utils/FetchUtility";
import JWT_TOKEN from "@/shared/constants/Tokens";

export interface TaskCreationRes {
    createdAt: Date;
    updatedAt: Date;
    uuid: string;
    id: string;
    name: string;
    jobId: string;
    calculationUnitId: string;
    startDate: Date;
    endDate: Date;
    vendorId: string;
    workQuantity: number;
    description: string;
    deletedAt: null;
}


export interface TaskInJobTasksList {
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
    data?: {
        id: string;
        uuid: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        startDate: Date;
        endDate: Date;
        tenantId: string;
        serviceId: string;
        sourceLanguageId: string;
        targetLanguageId: string;
        projectId: string;
        calculationUnitId: string;
        workQuantity: number;
        jobInstructions: string;
        deletedAt: null;
        tasks: TaskInJobTasksList[];
    };
}



export async function fetchJobTasks(uuid: string): Promise<TaskInJobTasksList[] | []> {
    try {

        const response = await APIRequestMethods().GETMethod(`${ApiURLWithUUID("jobs", uuid, "tasks")}`, "no-store")

        const responseData: APIResponseType = await response.json();

        if (!responseData.success) {
            console.error(responseData.success, responseData.message);
        }

        if (responseData.data && responseData.success && responseData.data.tasks) {
            console.error(responseData.success, responseData.message);
            // console.log(responseData.data);
            return responseData.data.tasks
        }

        return [] // returns empty array - [] - in case of failure to prevent throwing errors 

    } catch (error) {

        console.error("Failed to fetch job Data.... Read the error message below ==>\n", error);
        return []
    }
}



