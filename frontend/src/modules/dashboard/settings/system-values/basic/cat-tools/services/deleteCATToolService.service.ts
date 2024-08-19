import { APIUtility } from "@/shared/utils/api.util";
import { DeleteCATToolResponse } from "../types/deleteCatTool.type";

export const deleteCATToolService = async (catToolId: string): Promise<DeleteCATToolResponse> => {
    return APIUtility.delete<DeleteCATToolResponse>(`it-tools/${catToolId}?type=cat-tool`);
};
