import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditStateResponse } from "../types/editState.type";
import { editStateService } from "../services/editStateService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditState(): UseMutationResult<EditStateResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditStateResponse, AxiosError, any>({
        mutationFn: async ({ stateId, data }) => editStateService({ stateId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllStates"] });
            router.push("/dashboard/settings/system-values/basic?tab=states&subTab=overview");
            toast.success(`The state is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
