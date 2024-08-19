import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { TaskInputs } from "../Components/TaskCreationForm";

export interface TaskResponsePayload {
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

export interface TaskRequestPayload {
    resourceType: string;
    name: string;
    service: string;
    category: string;
    workQuantity: number;
    calculationUnitId: number;
    primaryPMId: string;
    secondaryPM: string;
    startDate: string;
    endDate: string;
    description: string;
    localizationServiceChecklist: string;
    vendorId: number;
    jobId: number;
}

export interface taskFormData extends TaskInputs {
    name: string;
    jobId: number;
    calculationUnitId: number;
    startDate: string;
    endDate: string;
    vendorId: number;
    workQuantity: number;
    description: string;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data?: TaskResponsePayload;
    };
}

export default async function PostNewTaskForm(payload: taskFormData): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().POSTMethod("tasks", payload);

        if (!response.data.success) {
            console.error(response.data.message);
        }

        return response;
    } catch (error) {
        console.error("Error posting new task:", error);

        return {
            data: {
                success: false,
                message: "Failed to post new task",
            },
        };
    }
}
