import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addPaymentMethodService } from "../services/addPaymentMethodService.service";
import { AddPaymentMethodResponse, PaymentMethodPayload } from "../types/addPaymentMethod.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddPaymentMethod = (): UseMutationResult<
    AddPaymentMethodResponse,
    AxiosError,
    PaymentMethodPayload
> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddPaymentMethodResponse, AxiosError, PaymentMethodPayload>({
        mutationFn: addPaymentMethodService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addPaymentMethod"] });
            router.push("/dashboard/settings/system-values/advanced?tab=languages&subTab=overview");
            toast.success(`The languages is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
