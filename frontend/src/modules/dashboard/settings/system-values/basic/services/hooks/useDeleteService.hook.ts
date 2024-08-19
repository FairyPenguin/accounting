import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteServiceResponse } from "../types/deleteService.type";
import { deleteServiceService } from "../services/deleteServiceService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteService = (): UseMutationResult<DeleteServiceResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteServiceResponse, AxiosError, string>({
        mutationFn: deleteServiceService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllServices"] });
            toast.success("The service is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
