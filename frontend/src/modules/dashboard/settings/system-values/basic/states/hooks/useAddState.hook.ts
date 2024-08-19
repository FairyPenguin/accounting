import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addStateService } from "../services/addStateService.service";
import { AddStateResponse, StatePayload } from "../types/addState.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddState = (): UseMutationResult<AddStateResponse, AxiosError, StatePayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddStateResponse, AxiosError, StatePayload>({
        mutationFn: addStateService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addState"] });
            router.push("/dashboard/settings/system-values/basic?tab=states&subTab=overview");
            toast.success(`The state is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
