import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditTransactionResponse } from "../types/editTransaction.type";
import { editTransactionService } from "../services/editTransactionService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditTransaction(): UseMutationResult<EditTransactionResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditTransactionResponse, AxiosError, any>({
        mutationFn: async ({ transactionId, data }) => editTransactionService({ transactionId, payload: data }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllTransactions"] });
            router.push("/dashboard/accounting/transactions");
            toast.success(`The transaction is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
