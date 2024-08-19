import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetDepartmentDetailsResponse } from "../types/getDepartmentDetails.type";
import { getDepartmentDetailsService } from "../services/getDepartmentDetailsService.service";

export function useGetDepartmentDetails(
    departmentId: string,
): UseQueryResult<GetDepartmentDetailsResponse, AxiosError> {
    return useQuery<GetDepartmentDetailsResponse, AxiosError>({
        queryKey: ["getDepartmentDetails"],
        queryFn: () => getDepartmentDetailsService(departmentId),
    });
}
