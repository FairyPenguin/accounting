import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteIndustryResponse } from "../types/deleteIndustry.type";
import { deleteIndustryService } from "../services/deleteIndustryService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteIndustry = (): UseMutationResult<DeleteIndustryResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteIndustryResponse, AxiosError, string>({
        mutationFn: deleteIndustryService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllIndustries"] });
            toast.success("The industry is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
