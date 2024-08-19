"use server";

import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { ProjectUpdateFormInputs } from "@/app/dashboard/projects/[projectUUID]/edit/ProjectEditingForm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface UpdatedProjectResponsePayload {
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

export interface UpdatedProjectRequestPayload {
    name: string;
    clientId: string;
    startDate: string;
    endDate: string;
    specializationId: string;
    accountId: string;
}

export interface taskFormData extends ProjectUpdateFormInputs {
    name: string;
    clientId: string;
    startDate: string;
    endDate: string;
    specializationId: number;
    accountId: string;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data?: UpdatedProjectResponsePayload;
    };
}

export default async function UpdateSignleProjectByUUID(payload: taskFormData, UUID: string) {
    const response: APIResponseType = await APIFunctionalUtility().PUTMethod(`projects/${UUID}`, payload);

    console.log(payload);

    if (response.data.success) {
        console.error(response.data.message);
        console.error(response.data.data);

        // return { success: response.data.success };

        revalidatePath(`/dashboard/projects/${UUID}/`);
        redirect(`/dashboard/projects/${UUID}/`);
    }

    return { success: false, error: response.data.message };
}

