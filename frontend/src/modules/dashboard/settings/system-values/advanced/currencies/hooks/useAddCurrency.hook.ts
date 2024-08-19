import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addCurrencyService } from "../services/addCurrencyService.service";
import { AddCurrencyResponse, CurrencyPayload } from "../types/addCurrency.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddCurrency = (): UseMutationResult<AddCurrencyResponse, AxiosError, CurrencyPayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddCurrencyResponse, AxiosError, CurrencyPayload>({
        mutationFn: addCurrencyService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addCurrency"] });
            router.push("/dashboard/settings/system-values/advanced?tab=currencies&subTab=overview");
            toast.success(`The currency is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
