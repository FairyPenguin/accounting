import { APIUtility } from "@/shared/utils/api.util";
import { DeleteServiceResponse } from "../types/deleteService.type";

export const deleteServiceService = async (serviceId: string): Promise<DeleteServiceResponse> => {
    return APIUtility.delete<DeleteServiceResponse>(`services/${serviceId}`);
};
