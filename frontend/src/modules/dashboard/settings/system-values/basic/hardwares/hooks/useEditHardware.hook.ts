import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditHardwareResponse } from "../types/editHardware.type";
import { editHardwareService } from "../services/editHardwareService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditHardware(): UseMutationResult<EditHardwareResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditHardwareResponse, AxiosError, any>({
        mutationFn: async ({ hardwareId, data }) => editHardwareService({ hardwareId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllHardwares"] });
            router.push("/dashboard/settings/system-values/basic?tab=hardwares&subTab=overview");
            toast.success(`The hardware is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
