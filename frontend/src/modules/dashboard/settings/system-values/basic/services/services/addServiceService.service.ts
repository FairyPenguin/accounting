import { APIUtility } from "@/shared/utils/api.util";
import { AddServiceResponse, ServicePayload } from "../types/addService.type";

export const addServiceService = async (payload: ServicePayload): Promise<AddServiceResponse> => {
    return await APIUtility.post<AddServiceResponse>("services", payload);
};
