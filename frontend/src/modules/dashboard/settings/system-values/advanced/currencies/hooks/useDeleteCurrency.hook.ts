import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteCurrencyResponse } from "../types/deleteCurrency.type";
import { deleteCurrencyService } from "../services/deleteCurrencyService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCurrency = (): UseMutationResult<DeleteCurrencyResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteCurrencyResponse, AxiosError, string>({
        mutationFn: deleteCurrencyService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCurrencies"] });
            toast.success("The currency is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
