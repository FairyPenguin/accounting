import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteRoleResponse } from "../types/deleteRole.type";
import { deleteRoleService } from "../services/deleteRoleService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteRole = (): UseMutationResult<DeleteRoleResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteRoleResponse, AxiosError, string>({
        mutationFn: deleteRoleService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllRoles"] });
            toast.success("The role is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
