import { IPaymentMethod } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllPaymentMethodsResponseData = {
    data: IPaymentMethod[];
    totalCount: number;
    totalPage: number;
};

export type GetAllPaymentMethodsResponse = ApiResponse<GetAllPaymentMethodsResponseData>;
