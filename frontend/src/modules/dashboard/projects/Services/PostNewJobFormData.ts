// "use server"

import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { JobInputs } from "../Components/JobCreationForm";

export interface JobResponsePayload {
    createdAt: Date;
    updatedAt: Date;
    uuid: string;
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    projectId: number;
    sourceLanguageId: string;
    calculationUnitId: string;
    workQuantity: number;
    serviceId: string;
    jobInstructions: string;
    targetLanguageId: string;
    tenantId: string;
    deletedAt: null;
}

export interface JobRequestPayload extends JobInputs {
    name: string;
    startDate: string;
    endDate: string;
    projectId: number;
    targetLanguageIds: number[];
    sourceLanguageId: number;
    calculationUnitId: number;
    workQuantity: number;
    serviceId: number;
    jobInstructions: string;
    clientId: number;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: JobResponsePayload[];
    };
}

async function PostNewJobForm(payload: JobRequestPayload): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().POSTMethod("jobs", payload);

        if (!response.data.success) {
            console.error(response.data.message);
        }

        return response;
    } catch (error) {
        console.error("Error posting new job:", error);

        return {
            data: {
                success: false,
                message: "Failed to post new job",
                data: [],
            },
        };
    }
}

export default PostNewJobForm;
