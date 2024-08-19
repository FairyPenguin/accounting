import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addRoleService } from "../services/addRoleService.service";
import { AddRolePayload, AddRoleResponse } from "../types/addRole.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useAddRoleHook(): UseMutationResult<AddRoleResponse, AxiosError, AddRolePayload> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddRoleResponse, AxiosError, AddRolePayload>({
        mutationFn: addRoleService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllRoles"] });
            router.push("/dashboard/settings/user-management?tab=roles&subTab=all-roles");
            toast.success(`The role is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
