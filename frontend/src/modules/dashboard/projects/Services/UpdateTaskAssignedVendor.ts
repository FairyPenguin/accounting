"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import APIRequestMethods from "@/shared/utils/FetchUtility";
import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";

export interface UpdatedTaskVendorResponsePayload {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: UpdatedAt;
    name: string;
    jobId: string;
    calculationUnitId: string;
    description: string;
    startDate: Date;
    endDate: Date;
    vendorId: number;
    workQuantity: number;
    deletedAt: null;
}

export interface UpdatedAt {
    val: string;
}


export interface UpdatedTaskVendorRequestPayload {
    vendorId: number | null;
}

export interface APIResponseType {
    success: boolean;
    message: string;
    data?: UpdatedTaskVendorResponsePayload;
}

export default async function UpdateTaskVendorByUUID(payload: UpdatedTaskVendorRequestPayload, UUID: string, route: string) {
    const response = await APIRequestMethods().PUTMethod<UpdatedTaskVendorRequestPayload>(ApiURLWithUUID("tasks", UUID, "assign-vendor"), payload);

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


