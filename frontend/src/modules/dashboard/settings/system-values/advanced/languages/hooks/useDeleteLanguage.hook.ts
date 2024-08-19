import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteLanguageResponse } from "../types/deleteLanguage.type";
import { deleteLanguageService } from "../services/deleteLanguageService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteLanguage = (): UseMutationResult<DeleteLanguageResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteLanguageResponse, AxiosError, string>({
        mutationFn: deleteLanguageService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllLanguages"] });
            toast.success("The language is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
