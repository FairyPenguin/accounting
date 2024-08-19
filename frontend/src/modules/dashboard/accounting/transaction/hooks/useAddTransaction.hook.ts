import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TransactionFormPayload } from "./useTransactionForm.hook";
import { AddTransactionResponse } from "../types/addTransaction.type";
import { addTransactionService } from "../services/addTransactionService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useAddTransaction(): UseMutationResult<AddTransactionResponse, AxiosError, TransactionFormPayload> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddTransactionResponse, AxiosError, TransactionFormPayload>({
        mutationFn: addTransactionService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllTransactions"] });
            router.push("/dashboard/accounting/transactions");
            toast.success(`The transaction is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
