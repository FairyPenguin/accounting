import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteCalculationUnitResponse } from "../types/deleteCalculationUnit.type";
import { deleteCalculationUnitService } from "../services/deleteCalculationUnitService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCalculationUnit = (): UseMutationResult<DeleteCalculationUnitResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteCalculationUnitResponse, AxiosError, string>({
        mutationFn: deleteCalculationUnitService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCalculationUnits"] });
            toast.success("The calculation unit is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
