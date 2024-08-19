import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllCATToolResponse } from "../types/getAllCatTools.type";

export const GetAllCatToolsService = async (params?: QueryParams): Promise<GetAllCATToolResponse> => {
    return await APIUtility.get<GetAllCATToolResponse>("it-tools?type=cat-tool", params);
};
