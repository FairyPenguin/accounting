import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addIndustryService } from "../services/addIndustryService.service";
import { AddIndustryResponse, IndustryPayload } from "../types/addIndustry.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddIndustry = (): UseMutationResult<AddIndustryResponse, AxiosError, IndustryPayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddIndustryResponse, AxiosError, IndustryPayload>({
        mutationFn: addIndustryService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addIndustry"] });
            router.push("/dashboard/settings/system-values/basic?tab=industries&subTab=overview");
            toast.success(`The industry is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
