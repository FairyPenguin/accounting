import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditUserResponse } from "../types/editUser.type";
import { editUserService } from "../services/editUserService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditUser(): UseMutationResult<EditUserResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditUserResponse, AxiosError, any>({
        mutationFn: async ({ userId, data }) => editUserService({ userId, payload: data }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
            router.push("/dashboard/settings/user-management?tab=users&subTab=all-users");
            toast.success(`The user is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
