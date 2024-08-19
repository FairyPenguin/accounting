import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteFieldOfStudyResponse } from "../types/deleteFieldOfStudy.type";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFieldOfStudyService } from "../services/deleteFieldOfStudyService.service";

export const useDeleteFieldOfStudy = (): UseMutationResult<DeleteFieldOfStudyResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteFieldOfStudyResponse, AxiosError, string>({
        mutationFn: deleteFieldOfStudyService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllFieldsOfStudy"] });
            toast.success("The field of study is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
