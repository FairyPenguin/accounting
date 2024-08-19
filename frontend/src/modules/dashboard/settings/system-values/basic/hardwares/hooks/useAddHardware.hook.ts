import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addHardwareService } from "../services/addHardwareService.service";
import { AddHardwareResponse, HardwarePayload } from "../types/addHardware.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddHardware = (): UseMutationResult<AddHardwareResponse, AxiosError, HardwarePayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddHardwareResponse, AxiosError, HardwarePayload>({
        mutationFn: addHardwareService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addHardware"] });
            router.push("/dashboard/settings/system-values/basic?tab=hardwares&subTab=overview");
            toast.success(`The hardware is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
