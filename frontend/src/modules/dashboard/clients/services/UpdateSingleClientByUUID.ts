"use server";

import { ClientUpdateFormInputs } from "@/app/dashboard/clients/[clientUUID]/edit/ClientEditingForm";
import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface UpdatedClientResponsePayload {
    name: string,
    email: string,
    contactNumber: string,
    taxNo: string,
    taxNo2: string,
    individual: boolean,
    countryId: number,
    state: string,
    currencyId: number,
    accountManagerId: number,
    source: string,
    salesPersonId: number,
    tenantId: number,
    note: string,
    deletedAt: Date
}

export interface UpdatedClientRequestPayload {
    name: string,
    email: string,
    contactNumber: string,
    taxNo: string,
    taxNo2: string,
    individual: boolean,
    countryId: number,
    state: string,
    currencyId: number,
    accountManagerId: number,
    source: string,
    salesPersonId: number,
    tenantId: number,
    note: string,
    deletedAt: Date
}

export interface taskFormData extends ClientUpdateFormInputs {
    name: string,
    email: string,
    contactNumber: string,
    taxNo: string,
    taxNo2: string,
    individual: boolean,
    countryId: number,
    state: string,
    currencyId: number,
    accountManagerId: number,
    source: string,
    salesPersonId: number,
    tenantId: number,
    note: string,
    deletedAt: Date
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data?: UpdatedClientRequestPayload;
    };
}

export default async function UpdateSignleClientByUUID(payload: any, UUID: string) {
        const response: APIResponseType = await APIFunctionalUtility().PUTMethod(`clients/${UUID}`, payload);

        if (response.data.success) {
            revalidatePath(`/dashboard/clients/${UUID}/`);
            redirect(`/dashboard/clients/${UUID}/`);
        }
    

    return { success: false, error: response.data.message };
}
