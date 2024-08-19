import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ISoftware } from ".";

export interface SoftwarePayload {
    name: string;
}

export type AddSoftwareResponse = ApiResponse<ISoftware>;
