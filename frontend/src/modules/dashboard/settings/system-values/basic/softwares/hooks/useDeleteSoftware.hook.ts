import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteSoftwareResponse } from "../types/deleteSoftware.type";
import { deleteSoftwareService } from "../services/deleteSoftwareService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteSoftware = (): UseMutationResult<DeleteSoftwareResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteSoftwareResponse, AxiosError, string>({
        mutationFn: deleteSoftwareService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllSoftwares"] });
            toast.success("The software is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
