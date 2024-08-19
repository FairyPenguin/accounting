import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TransferFormPayload } from "./useTransferForm.hook";
import { AddTransferResponse } from "../types/addTransfer.type";
import { addTransferService } from "../services/addTransferService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useAddTransfer(): UseMutationResult<AddTransferResponse, AxiosError, TransferFormPayload> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddTransferResponse, AxiosError, TransferFormPayload>({
        mutationFn: addTransferService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllTransfers"] });
            router.push("/dashboard/accounting/transfers");
            toast.success(`The transfer is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
