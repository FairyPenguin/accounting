import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addFieldOfStudyService } from "../services/addFieldOfStudyService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { AddFieldOfStudyResponse, FieldOfStudyPayload } from "../types/addFieldOfStudy.type";

export const useAddFieldOfStudy = (): UseMutationResult<AddFieldOfStudyResponse, AxiosError, FieldOfStudyPayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddFieldOfStudyResponse, AxiosError, FieldOfStudyPayload>({
        mutationFn: addFieldOfStudyService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addFieldOfStudy"] });
            router.push("/dashboard/settings/system-values/basic?tab=fields-of-study&subTab=overview");
            toast.success(`The field of study is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
