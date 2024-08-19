import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllUsersService } from "../services/getAllUsersService.service";
import { GetAllUsersResponse, GetAllUsersResponseData } from "../types/getAllUsers.type";

export const useGetAllUsers = (params?: QueryParams): UseQueryResult<GetAllUsersResponseData, AxiosError> => {
    return useQuery<GetAllUsersResponseData, AxiosError>({
        queryKey: ["getAllUsers", params],
        queryFn: async (): Promise<GetAllUsersResponseData> => {
            const response: GetAllUsersResponse = await getAllUsersService(params);

            const usersData: GetAllUsersResponseData = response.data;

            return { data: usersData.data, totalCount: usersData.totalCount, totalPage: usersData.totalPage };
        },
    });
};
