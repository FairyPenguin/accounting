import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllTransfersService } from "../services/getAllTransfersService.service";
import { GetAllTransfersResponse, GetAllTransfersResponseData } from "../types/geTransfersList.type";

export const useGetAllTransfers = (params?: QueryParams): UseQueryResult<GetAllTransfersResponseData, AxiosError> => {
    return useQuery<GetAllTransfersResponseData, AxiosError>({
        queryKey: ["getAllTransfers", params],
        queryFn: async (): Promise<GetAllTransfersResponseData> => {
            const response: GetAllTransfersResponse = await getAllTransfersService(params);

            const accountsData: GetAllTransfersResponseData = response.data;

            return { data: accountsData.data, totalCount: accountsData.totalCount, totalPage: accountsData.totalPage };
        },
    });
};
