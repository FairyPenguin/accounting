import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditCalculationUnitResponse } from "../types/editCalculationUnit.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { editCalculationUnitService } from "../services/editCalculationUnitService.service";

export function useEditCalculationUnit(): UseMutationResult<EditCalculationUnitResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditCalculationUnitResponse, AxiosError, any>({
        mutationFn: async ({ calculationUnitId, data }) =>
            editCalculationUnitService({ calculationUnitId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCalculationUnits"] });
            router.push("/dashboard/settings/system-values/advanced?tab=calculation-units&subTab=overview");
            toast.success(`The calculation unit is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
