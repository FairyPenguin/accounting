import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditAccountResponse } from "../types/editAccount.type";
import { editAccountService } from "../services/editAccountService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditAccount(): UseMutationResult<EditAccountResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditAccountResponse, AxiosError, any>({
        mutationFn: async ({ accountId, data }) => editAccountService({ accountId, payload: data }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllAccounts"] });
            router.push("/dashboard/accounting/accounts");
            toast.success(`The account is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
