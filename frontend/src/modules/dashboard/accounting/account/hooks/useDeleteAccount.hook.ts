import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteAccountResponse } from "../types/deleteAccount.type";
import { deleteAccountService } from "../services/deleteAccountService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteAccount = (): UseMutationResult<DeleteAccountResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteAccountResponse, AxiosError, string>({
        mutationFn: deleteAccountService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllAccounts"] });
            toast.success("The account is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
