import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllPaymentMethodsResponse } from "../types/getAllPaymentMethods.type";

export const getAllPaymentMethodsService = async (params?: QueryParams): Promise<GetAllPaymentMethodsResponse> => {
    return await APIUtility.get<GetAllPaymentMethodsResponse>("languages", params);
};
