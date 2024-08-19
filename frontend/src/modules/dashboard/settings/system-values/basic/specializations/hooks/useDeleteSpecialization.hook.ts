import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteSpecializationResponse } from "../types/deleteSpecialization.type";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSpecializationService } from "../services/deleteSpecializationService.service";

export const useDeleteSpecialization = (): UseMutationResult<DeleteSpecializationResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteSpecializationResponse, AxiosError, string>({
        mutationFn: deleteSpecializationService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllSpecializations"] });
            toast.success("The specialization is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
