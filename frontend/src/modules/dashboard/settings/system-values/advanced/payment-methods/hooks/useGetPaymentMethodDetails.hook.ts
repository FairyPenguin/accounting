import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getPaymentMethodDetailsService } from "../services/getPaymentMethodDetailsService.service";
import { GetPaymentMethodDetailsResponse } from "../types/getPaymentMethodDetails.type";

export function useGetPaymentMethodDetails(
    languageId: string,
): UseQueryResult<GetPaymentMethodDetailsResponse, AxiosError> {
    return useQuery<GetPaymentMethodDetailsResponse, AxiosError>({
        queryKey: ["getPaymentMethodDetails"],
        queryFn: () => getPaymentMethodDetailsService(languageId),
    });
}
