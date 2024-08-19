import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addSoftwareService } from "../services/addSoftwareService.service";
import { AddSoftwareResponse, SoftwarePayload } from "../types/addSoftware.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddSoftware = (): UseMutationResult<AddSoftwareResponse, AxiosError, SoftwarePayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddSoftwareResponse, AxiosError, SoftwarePayload>({
        mutationFn: addSoftwareService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addSoftware"] });
            router.push("/dashboard/settings/system-values/basic?tab=softwares&subTab=overview");
            toast.success(`The software is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
