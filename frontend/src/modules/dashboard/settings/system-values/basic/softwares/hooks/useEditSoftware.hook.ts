import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditSoftwareResponse } from "../types/editSoftware.type";
import { editSoftwareService } from "../services/editSoftwareService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditSoftware(): UseMutationResult<EditSoftwareResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditSoftwareResponse, AxiosError, any>({
        mutationFn: async ({ softwareId, data }) => editSoftwareService({ softwareId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllSoftwares"] });
            router.push("/dashboard/settings/system-values/basic?tab=softwares&subTab=overview");
            toast.success(`The software is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
