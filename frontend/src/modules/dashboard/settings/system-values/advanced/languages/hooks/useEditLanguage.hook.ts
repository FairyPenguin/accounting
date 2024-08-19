import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditLanguageResponse } from "../types/editLanguage.type";
import { editLanguageService } from "../services/editLanguageService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditLanguage(): UseMutationResult<EditLanguageResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditLanguageResponse, AxiosError, any>({
        mutationFn: async ({ languageId, data }) => editLanguageService({ languageId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllLanguages"] });
            router.push("/dashboard/settings/system-values/advanced?tab=languages&subTab=overview");
            toast.success(`The language is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
