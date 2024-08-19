import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteStateResponse } from "../types/deleteState.type";
import { deleteStateService } from "../services/deleteStateService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteState = (): UseMutationResult<DeleteStateResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteStateResponse, AxiosError, string>({
        mutationFn: deleteStateService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllStates"] });
            toast.success("The state is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
