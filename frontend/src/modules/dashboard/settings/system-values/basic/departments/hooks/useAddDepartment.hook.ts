import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addDepartmentService } from "../services/addDepartmentService.service";
import { AddDepartmentResponse, DepartmentPayload } from "../types/addDepartment.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddDepartment = (): UseMutationResult<AddDepartmentResponse, AxiosError, DepartmentPayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddDepartmentResponse, AxiosError, DepartmentPayload>({
        mutationFn: addDepartmentService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addDepartment"] });
            router.push("/dashboard/settings/system-values/basic?tab=departments&subTab=overview");
            toast.success(`The department is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
