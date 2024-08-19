import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeletePaymentMethodResponse } from "../types/deletePaymentMethod.type";
import { deletePaymentMethodService } from "../services/deletePaymentMethodService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeletePaymentMethod = (): UseMutationResult<DeletePaymentMethodResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeletePaymentMethodResponse, AxiosError, string>({
        mutationFn: deletePaymentMethodService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllPaymentMethods"] });
            toast.success("The language is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
