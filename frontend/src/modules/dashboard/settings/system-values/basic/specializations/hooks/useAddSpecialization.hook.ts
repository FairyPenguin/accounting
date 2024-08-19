import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { addSpecializationService } from "../services/addSpecializationService.service";
import { AddSpecializationResponse, SpecializationPayload } from "../types/addSpecialization.type";

export const useAddSpecialization = (): UseMutationResult<
    AddSpecializationResponse,
    AxiosError,
    SpecializationPayload
> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddSpecializationResponse, AxiosError, SpecializationPayload>({
        mutationFn: addSpecializationService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addSpecialization"] });
            router.push("/dashboard/settings/system-values/basic?tab=specializations&subTab=overview");
            toast.success(`The specialization is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
