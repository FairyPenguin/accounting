import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IFieldOfStudy } from ".";

export interface FieldOfStudyPayload {
    name: string;
}

export type AddFieldOfStudyResponse = ApiResponse<IFieldOfStudy>;
