import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditDepartmentResponse } from "../types/editDepartment.type";
import { editDepartmentService } from "../services/editDepartmentService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditDepartment(): UseMutationResult<EditDepartmentResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditDepartmentResponse, AxiosError, any>({
        mutationFn: async ({ departmentId, data }) => editDepartmentService({ departmentId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllDepartments"] });
            router.push("/dashboard/settings/system-values/basic?tab=departments&subTab=overview");
            toast.success(`The department is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
