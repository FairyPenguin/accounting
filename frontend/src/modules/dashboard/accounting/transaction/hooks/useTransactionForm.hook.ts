import { useForm } from "react-hook-form";
import { transactionSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export interface TransactionFormPayload {
    accountId: string;
    journalEntryId: string;
    type: string;
    amount: string;
    description: string;
}
export function useTransactionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm<TransactionFormPayload | any>({
        mode: "onTouched",
        resolver: yupResolver(transactionSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
