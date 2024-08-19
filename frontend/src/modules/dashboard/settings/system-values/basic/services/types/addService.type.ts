import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IService } from ".";

export interface ServicePayload {
    name: string;
}

export type AddServiceResponse = ApiResponse<IService>;
