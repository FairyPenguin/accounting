import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditSpecializationResponse } from "../types/editSpecialization.type";
import { editSpecializationService } from "../services/editSpecializationService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditSpecialization(): UseMutationResult<EditSpecializationResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditSpecializationResponse, AxiosError, any>({
        mutationFn: async ({ specializationId, data }) =>
            editSpecializationService({ specializationId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllSpecializations"] });
            router.push("/dashboard/settings/system-values/basic?tab=specializations&subTab=overview");
            toast.success(`The specialization is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
