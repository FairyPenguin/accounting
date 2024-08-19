import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditCurrencyResponse } from "../types/editCurrency.type";
import { editCurrencyService } from "../services/editCurrencyService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditCurrency(): UseMutationResult<EditCurrencyResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditCurrencyResponse, AxiosError, any>({
        mutationFn: async ({ currencyId, data }) => editCurrencyService({ currencyId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCurrencies"] });
            router.push("/dashboard/settings/system-values/advanced?tab=currencies&subTab=overview");
            toast.success(`The currency is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
