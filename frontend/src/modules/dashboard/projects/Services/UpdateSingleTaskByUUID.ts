"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { TaskInputs } from "../Components/TaskCreationForm";
import APIRequestMethods from "@/shared/utils/FetchUtility";
import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";

export interface UpdatedTaskResponsePayload {
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

export interface UpdatedTaskRequestPayload {
    name: string;
    clientId: string;
    startDate: string;
    endDate: string;
    specializationId: string;
    accountId: string;
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

    success: boolean;
    message: string;
    data?: UpdatedTaskResponsePayload;

}

export default async function UpdateSignleTaskByUUID(payload: taskFormData, UUID: string, route: string) {
    const response = await APIRequestMethods().PUTMethod<taskFormData>(ApiURLWithUUID("tasks", UUID), payload);

    const responseData: APIResponseType = await response.json()

    console.log(payload);

    if (responseData.success) {
        console.error(responseData.message);
        console.error(responseData.data);

        // return { success: responseData.success };

        revalidatePath(route);
        redirect(route);
    }

    return { success: responseData.success, error: responseData.message };
}



