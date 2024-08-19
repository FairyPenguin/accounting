import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addServiceService } from "../services/addServiceService.service";
import { AddServiceResponse, ServicePayload } from "../types/addService.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddService = (): UseMutationResult<AddServiceResponse, AxiosError, ServicePayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddServiceResponse, AxiosError, ServicePayload>({
        mutationFn: addServiceService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addService"] });
            router.push("/dashboard/settings/system-values/basic?tab=services&subTab=overview");
            toast.success(`The service is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
