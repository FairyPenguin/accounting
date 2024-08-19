import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteDepartmentResponse } from "../types/deleteDepartment.type";
import { deleteDepartmentService } from "../services/deleteDepartmentService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteDepartment = (): UseMutationResult<DeleteDepartmentResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteDepartmentResponse, AxiosError, string>({
        mutationFn: deleteDepartmentService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllDepartments"] });
            toast.success("The department is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
