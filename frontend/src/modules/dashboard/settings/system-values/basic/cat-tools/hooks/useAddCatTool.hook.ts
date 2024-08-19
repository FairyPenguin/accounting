import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addCatToolService } from "../services/addCatToolService.service";
import { CatToolPayload, AddCatToolResponse } from "../types/addCatTool.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddCatTool = (): UseMutationResult<AddCatToolResponse, AxiosError, CatToolPayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddCatToolResponse, AxiosError, CatToolPayload>({
        mutationFn: addCatToolService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["addCatTool"] });
            router.push("/dashboard/settings/system-values/basic?tab=cat-tools&subTab=overview");
            toast.success(`The cat tool is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
