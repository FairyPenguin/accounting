import APIRequestMethods from "@/shared/utils/FetchUtility";
import { Service } from "./FetchAllServices";
import { Language } from "./FetchAllLangs";
import { Unit } from "./FetchAllCalculationUnits";
import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";

export interface JobByUUID {
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
    service: Service;
    sourceLanguage: Language;
    targetLanguages: Language;
    calculationUnit: Unit;
}


export interface APIResponseType {
    success: boolean;
    message: string;
    data?: JobByUUID;
}

export interface JobByUUIDResponseType {
    success: boolean;
    message: string;
    JobByUUID?: JobByUUID
}

async function getSingleJobByUUID(UUID: string): Promise<JobByUUIDResponseType> {
    try {
        const response = await APIRequestMethods().GETMethod(
            `${ApiURLWithUUID("jobs", UUID)}`, "no-store"
        );

        const responseData: APIResponseType = await response.json();


        if (!responseData.success) {
            console.error(responseData.success, responseData.message);

        }

        if (responseData.data && responseData.success && responseData.message) {
            // return responseData
            return {
                success: responseData.success,
                message: responseData.message,
                JobByUUID: responseData.data
            }
        }

        return responseData

    } catch (error) {
        console.error("Failed to fetch job Data.... Read the error message below ==>\n", error);

        return { success: false, message: 'Failed to fetch job data from JobByUUID' };
    }
}

// async function fetchSingleJob(UUID: string): Promise<JobByUUID> {
//     const job = await getSingleJobByUUID(UUID)

//     if (job && job.data && job.data !== undefined) {
//         return job.data
//     }

//     return job?.data
// }


export default getSingleJobByUUID;





