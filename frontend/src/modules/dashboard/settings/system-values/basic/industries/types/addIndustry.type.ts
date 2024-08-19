import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IIndustry } from ".";

export interface IndustryPayload {
    name: string;
}

export type AddIndustryResponse = ApiResponse<IIndustry>;
