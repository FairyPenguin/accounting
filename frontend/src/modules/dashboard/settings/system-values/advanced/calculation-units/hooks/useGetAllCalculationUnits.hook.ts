import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllCalculationUnitsService } from "../services/getAllCalculationUnitsService.service";
import {
    GetAllCalculationUnitsResponse,
    GetAllCalculationUnitsResponseData,
} from "../types/getAllCalculationUnits.type";

export const useGetAllCalculationUnits = (
    params?: QueryParams,
): UseQueryResult<GetAllCalculationUnitsResponseData, AxiosError> => {
    return useQuery<GetAllCalculationUnitsResponseData, AxiosError>({
        queryKey: ["getAllCalculationUnits", params],
        queryFn: async (): Promise<GetAllCalculationUnitsResponseData> => {
            const response: GetAllCalculationUnitsResponse = await getAllCalculationUnitsService(params);

            const rolesData: GetAllCalculationUnitsResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
