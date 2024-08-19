import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { editTransferService } from "../services";
import { EditTransferResponse } from "../types/editTransfer.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditTransfer(): UseMutationResult<EditTransferResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditTransferResponse, AxiosError, any>({
        mutationFn: async ({ transferId, data }) => editTransferService({ transferId, payload: data }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllTransfers"] });
            router.push("/dashboard/accounting/transfers");
            toast.success(`The transfer is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
