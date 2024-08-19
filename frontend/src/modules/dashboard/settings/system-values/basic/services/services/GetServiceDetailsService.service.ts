import { APIUtility } from "@/shared/utils/api.util";
import { GetServiceDetailsResponse } from "../types/getServiceDetails.type";

export const getServiceDetailsService = async (serviceId: string): Promise<GetServiceDetailsResponse> => {
    return await APIUtility.get<GetServiceDetailsResponse>(`services/${serviceId}`);
};
