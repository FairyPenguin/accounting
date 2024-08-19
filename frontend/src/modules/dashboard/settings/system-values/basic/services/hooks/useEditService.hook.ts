import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditServiceResponse } from "../types/editService.type";
import { editServiceService } from "../services/editServiceService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditService(): UseMutationResult<EditServiceResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditServiceResponse, AxiosError, any>({
        mutationFn: async ({ serviceId, data }) => editServiceService({ serviceId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllServices"] });
            router.push("/dashboard/settings/system-values/basic?tab=services&subTab=overview");
            toast.success(`The service is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
