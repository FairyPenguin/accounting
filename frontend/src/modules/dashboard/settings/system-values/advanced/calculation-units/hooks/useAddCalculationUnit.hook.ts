import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { addCalculationUnitService } from "../services/addCalculationUnitService.service";
import { AddCalculationUnitResponse, CalculationUnitPayload } from "../types/addCalculationUnit.type";

export const useAddCalculationUnit = (): UseMutationResult<
    AddCalculationUnitResponse,
    AxiosError,
    CalculationUnitPayload
> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddCalculationUnitResponse, AxiosError, CalculationUnitPayload>({
        mutationFn: addCalculationUnitService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addCalculationUnit"] });
            router.push("/dashboard/settings/system-values/advanced?tab=calculation-units&subTab=overview");
            toast.success(`The calculation unit is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
