import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteTransactionResponse } from "../types/deleteTransaction.type";
import { deleteTransactionService } from "../services/deleteTransactionService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTransaction = (): UseMutationResult<DeleteTransactionResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteTransactionResponse, AxiosError, string>({
        mutationFn: deleteTransactionService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllTransactions"] });
            toast.success("The account is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
