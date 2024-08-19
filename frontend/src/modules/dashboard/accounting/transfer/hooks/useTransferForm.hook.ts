import { useForm } from "react-hook-form";
import { transferSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export interface TransferFormPayload {
    fromAccountId: string;
    toAccountId: string;
    amount: string;
    description: string;
}

export function useTransferForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm<TransferFormPayload>({
        mode: "onTouched",
        resolver: yupResolver(transferSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
