"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { JobInputs } from "../Components/JobCreationForm";
import APIRequestMethods from "@/shared/utils/FetchUtility";
import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";

export interface UpdatedJobResponsePayload {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: UpdatedAt;
    name: string;
    startDate: Date;
    endDate: Date;
    tenantId: string;
    serviceId: number;
    sourceLanguageId: number;
    targetLanguageId: number;
    projectId: number;
    calculationUnitId: number;
    workQuantity: number;
    jobInstructions: string;
    deletedAt: null;
}

export interface UpdatedAt {
    val: string;
}

export interface UpdatedJobRequestPayload {
    name: string;
    startDate: Date;
    endDate: Date;
    projectId: number;
    targetLanguageId: number;
    sourceLanguageId: number;
    calculationUnitId: number;
    workQuantity: number;
    serviceId: number;
    jobInstructions: string;
}

export interface jobFormData extends JobInputs {
    name: string;
    startDate: string;
    endDate: string;
    projectId: number;
    targetLanguageId: number;
    sourceLanguageId: number;
    calculationUnitId: number;
    workQuantity: number;
    serviceId: number;
    jobInstructions: string;
}

export interface APIResponseType {
    success: boolean;
    message: string;
    data?: UpdatedJobResponsePayload;
}

export default async function UpdateSignleJobByUUID(payload: jobFormData, UUID: string, route: string) {
    const response = await APIRequestMethods().PUTMethod<jobFormData>(ApiURLWithUUID("jobs", UUID), payload);

    const responseData: APIResponseType = await response.json()

    console.log(payload);

    if (responseData.success) {
        console.error(responseData.message);
        console.error(responseData.data);

        // return { success: response.data.success };

        revalidatePath(route);
        redirect(route);
    }

    return { success: responseData.success, error: responseData.message };
}




