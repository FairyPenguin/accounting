import { APIUtility } from "@/shared/utils/api.util";
import { GetCATToolDetailsResponse } from "../types/getCatToolDetails.type";

export const GetCatToolDetailsService = async (toolId: string): Promise<GetCATToolDetailsResponse> => {
    return await APIUtility.get<GetCATToolDetailsResponse>(`it-tools/${toolId}?type=cat-tool`);
};
