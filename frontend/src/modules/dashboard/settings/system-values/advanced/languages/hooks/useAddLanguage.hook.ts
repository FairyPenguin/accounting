import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addLanguageService } from "../services/addLanguageService.service";
import { AddLanguageResponse, LanguagePayload } from "../types/addLanguage.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddLanguage = (): UseMutationResult<AddLanguageResponse, AxiosError, LanguagePayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddLanguageResponse, AxiosError, LanguagePayload>({
        mutationFn: addLanguageService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addLanguage"] });
            router.push("/dashboard/settings/system-values/advanced?tab=languages&subTab=overview");
            toast.success(`The languages is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
