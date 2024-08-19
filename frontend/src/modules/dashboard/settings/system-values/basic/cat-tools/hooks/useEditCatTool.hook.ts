import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditCATToolResponse } from "../types/editCatTool.type";
import { editCatToolService } from "../services/editCatToolService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditCatTool(): UseMutationResult<EditCATToolResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditCATToolResponse, AxiosError, any>({
        mutationFn: async ({ toolId, data }) => editCatToolService({ toolId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCatTools"] });
            router.push("/dashboard/settings/system-values/basic?tab=cat-tools&subTab=overview");
            toast.success(`The cat tool is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
