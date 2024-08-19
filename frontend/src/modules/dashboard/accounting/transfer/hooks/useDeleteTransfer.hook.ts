import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteTransferResponse } from "../types/deleteTransfer.type";
import { deleteTransferService } from "../services/deleteTransferService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTransfer = (): UseMutationResult<DeleteTransferResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteTransferResponse, AxiosError, string>({
        mutationFn: deleteTransferService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllTransfers"] });
            toast.success("The account is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
