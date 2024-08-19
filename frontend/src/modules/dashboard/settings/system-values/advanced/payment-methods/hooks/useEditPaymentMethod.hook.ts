import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditPaymentMethodResponse } from "../types/editPaymentMethod.type";
import { editPaymentMethodService } from "../services/editPaymentMethodService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditPaymentMethod(): UseMutationResult<EditPaymentMethodResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditPaymentMethodResponse, AxiosError, any>({
        mutationFn: async ({ languageId, data }) => editPaymentMethodService({ languageId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllPaymentMethods"] });
            router.push("/dashboard/settings/system-values/advanced?tab=languages&subTab=overview");
            toast.success(`The language is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
