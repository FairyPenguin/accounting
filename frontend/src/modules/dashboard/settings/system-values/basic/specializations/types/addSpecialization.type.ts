import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ISpecialization } from ".";

export interface SpecializationPayload {
    name: string;
}

export type AddSpecializationResponse = ApiResponse<ISpecialization>;
