import { ILanguage } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllLanguagesResponseData = {
    data: ILanguage[];
    totalCount: number;
    totalPage: number;
};

export type GetAllLanguagesResponse = ApiResponse<GetAllLanguagesResponseData>;
