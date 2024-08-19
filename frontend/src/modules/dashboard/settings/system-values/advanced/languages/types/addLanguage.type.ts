import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ILanguage } from ".";

export interface LanguagePayload {
    name: string;
    symbol: string;
    ISOCode2L: string;
    ISOCode3L: string;
    default?: boolean;
}

export type AddLanguageResponse = ApiResponse<ILanguage>;
