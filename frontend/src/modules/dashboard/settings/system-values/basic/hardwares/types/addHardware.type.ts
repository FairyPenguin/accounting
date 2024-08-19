import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IHardware } from ".";

export interface HardwarePayload {
    name: string;
}

export type AddHardwareResponse = ApiResponse<IHardware>;
