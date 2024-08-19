import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ICatTool } from ".";

export interface CatToolPayload {
    name: string;
}

export type AddCatToolResponse = ApiResponse<ICatTool>;
