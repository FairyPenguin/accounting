import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { Inputs } from "../Components/ProjectCreationForm";

export interface ProjectResponsePayload {
    createdAt: Date;
    updatedAt: Date;
    uuid: string;
    status: string;
    id: string;
    name: string;
    clientId: string;
    specializationId: string;
    primaryPMId: string;
    startDate: Date;
    deadline: Date;
    tenantId: string;
    createdById: string;
    accountId: null;
    secondaryPMId: null;
    salesPersonId: null;
    accountManagerId: null;
    description: null;
    clientNote: null;
    internalNote: null;
    updatedById: null;
    deletedAt: null;
}

export interface RequestPayload {
    name: string;
    projectTemplate: string;
    projectName: string;
    clientId: string;
    startDate: string;
    deadline: string;
    specializationId: string;
    account: string;
    clientService: string;
    clientServiceChecklist: string;
    jobName: string;
    sourceLanguage: string;
    targetLanguages: string[];
    tools: string;
    quantity: string;
    quantityExtention: string;
    durationDate: string;
    jobDeadline: string;
    jobInstructions: string;
    primaryPMId: string;
    secondaryPM: string;
    salesPerson: string;
    accountManager: string;
    totalPrice: string;
    unitPrice: string;
    currency: string;
    inHouseService: string;
    freelancerService: string;
    inHouseTaskInstructions: string;
    freelancerTaskInstructions: string;
}

export interface projectFormData extends Inputs {
    name: string;
    clientId: string;
    specializationId: number;
    primaryPMId: string;
    startDate: string;
    deadline: string;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data?: ProjectResponsePayload;
    };
}

export default async function PostNewProjectForm(payload: projectFormData): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().POSTMethod("projects", payload);

        if (!response.data.success) {
            console.error(response.data.message);
        }
        console.log(response.data.message, response.data.success);

        return response;
    } catch (error) {
        return {
            data: {
                success: false,
                message: "Failed to post new project",
            },
        };

        /**
         * Error handling guide:-
         * 1.
         */
    }
}
