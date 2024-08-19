import { APIUtility } from "@/shared/utils/api.util";
import { ServicePayload } from "../types/addService.type";
import { EditServiceResponse } from "../types/editService.type";

export const editServiceService = async ({
    serviceId,
    payload,
}: {
    serviceId: string;
    payload: ServicePayload;
}): Promise<EditServiceResponse> => {
    return await APIUtility.put<EditServiceResponse>(`services/${serviceId}`, payload);
};
