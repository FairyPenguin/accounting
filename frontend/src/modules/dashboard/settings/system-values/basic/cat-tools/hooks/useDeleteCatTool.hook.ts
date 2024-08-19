import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteCATToolResponse } from "../types/deleteCatTool.type";
import { deleteCATToolService } from "../services/deleteCATToolService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCATTool = (): UseMutationResult<DeleteCATToolResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteCATToolResponse, AxiosError, string>({
        mutationFn: deleteCATToolService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCatTools"] });
            toast.success("The cat tool is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
