import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditIndustryResponse } from "../types/editIndustry.type";
import { editIndustryService } from "../services/editIndustryService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditIndustry(): UseMutationResult<EditIndustryResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditIndustryResponse, AxiosError, any>({
        mutationFn: async ({ industryId, data }) => editIndustryService({ industryId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllIndustries"] });
            router.push("/dashboard/settings/system-values/basic?tab=industries&subTab=overview");
            toast.success(`The industry is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
