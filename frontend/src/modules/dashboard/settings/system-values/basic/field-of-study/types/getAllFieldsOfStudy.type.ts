import { IFieldOfStudy } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllFieldsOfStudyResponseData = {
    data: IFieldOfStudy[];
    totalCount: number;
    totalPage: number;
};

export type GetAllFieldsOfStudyResponse = ApiResponse<GetAllFieldsOfStudyResponseData>;
