import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IState } from ".";

export interface StatePayload {
    name: string;
}

export type AddStateResponse = ApiResponse<IState>;
