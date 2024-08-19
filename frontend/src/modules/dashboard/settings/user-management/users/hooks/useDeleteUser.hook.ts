import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteUserResponse } from "../types/deleteUser.type";
import { deleteUserService } from "../services/deleteUserService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteUser = (): UseMutationResult<DeleteUserResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteUserResponse, AxiosError, string>({
        mutationFn: deleteUserService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
            toast.success("The user is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
