import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AccountFormPayload } from "./useAccountForm.hook";
import { AddAccountResponse } from "../types/addAccount.type";
import { addAccountService } from "../services/addAccountService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useAddAccount(): UseMutationResult<AddAccountResponse, AxiosError, AccountFormPayload> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddAccountResponse, AxiosError, AccountFormPayload>({
        mutationFn: addAccountService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllAccounts"] });
            router.push("/dashboard/accounting/accounts");
            toast.success(`The account is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
