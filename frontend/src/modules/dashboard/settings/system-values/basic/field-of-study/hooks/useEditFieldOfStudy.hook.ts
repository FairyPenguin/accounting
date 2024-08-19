import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditFieldOfStudyResponse } from "../types/editFieldOfStudy.type";
import { editFieldOfStudyService } from "../services/editFieldOfStudyService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditFieldOfStudy(): UseMutationResult<EditFieldOfStudyResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditFieldOfStudyResponse, AxiosError, any>({
        mutationFn: async ({ fieldOfStudyId, data }) => editFieldOfStudyService({ fieldOfStudyId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllFieldsOfStudy"] });
            router.push("/dashboard/settings/system-values/basic?tab=fields-of-study&subTab=overview");
            toast.success(`The field of study is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
