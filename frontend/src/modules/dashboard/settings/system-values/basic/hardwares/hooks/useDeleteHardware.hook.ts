import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteHardwareResponse } from "../types/deleteHardware.type";
import { deleteHardwareService } from "../services/deleteHardwareService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteHardware = (): UseMutationResult<DeleteHardwareResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteHardwareResponse, AxiosError, string>({
        mutationFn: deleteHardwareService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllHardwares"] });
            toast.success("The hardware is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
