import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetCalculationUnitDetailsResponse } from "../types/getCalculationUnitDetails.type";
import { getCalculationUnitDetailsService } from "../services/getCalculationUnitDetailsService.service";

export function useGetCalculationUnitDetails(
    calculationUnitId: string,
): UseQueryResult<GetCalculationUnitDetailsResponse, AxiosError> {
    return useQuery<GetCalculationUnitDetailsResponse, AxiosError>({
        queryKey: ["getCalculationUnitDetails"],
        queryFn: () => getCalculationUnitDetailsService(calculationUnitId),
    });
}
