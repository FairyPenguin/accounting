import { APIUtility } from "@/shared/utils/api.util";
import { CatToolPayload, AddCatToolResponse } from "../types/addCatTool.type";

export const addCatToolService = async (payload: CatToolPayload): Promise<AddCatToolResponse> => {
    return await APIUtility.post<AddCatToolResponse>("it-tools?type=cat-tool", payload);
};
