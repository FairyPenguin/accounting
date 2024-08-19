import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllTransfersResponse } from "../types/geTransfersList.type";

export const getAllTransfersService = async (params?: QueryParams): Promise<GetAllTransfersResponse> => {
    return await APIUtility.get<GetAllTransfersResponse>("transfers", params);
};
