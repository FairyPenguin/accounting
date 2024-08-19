import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllServicesResponse } from "../types/getAllServices.type";

export const getAllServicesService = async (params?: QueryParams): Promise<GetAllServicesResponse> => {
    return await APIUtility.get<GetAllServicesResponse>("services", params);
};
