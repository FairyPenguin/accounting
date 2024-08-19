import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { UserFormPayload } from "./useUserForm.hook";
import { AddUserResponse } from "../types/addUser.type";
import { addUserService } from "../services/addUserService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useAddUser(): UseMutationResult<AddUserResponse, AxiosError, UserFormPayload> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddUserResponse, AxiosError, UserFormPayload>({
        mutationFn: addUserService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
            router.push("/dashboard/settings/user-management?tab=users&subTab=all-users");
            toast.success(`The user is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
