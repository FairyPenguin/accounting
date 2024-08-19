import { APIUtility } from "@/shared/utils/api.util";
import { CatToolPayload } from "../types/addCatTool.type";
import { EditCATToolResponse } from "../types/editCatTool.type";

export const editCatToolService = async ({
    toolId,
    payload,
}: {
    toolId: string;
    payload: CatToolPayload;
}): Promise<EditCATToolResponse> => {
    return await APIUtility.put<EditCATToolResponse>(`it-tools/${toolId}?type=cat-tool`, payload);
};
