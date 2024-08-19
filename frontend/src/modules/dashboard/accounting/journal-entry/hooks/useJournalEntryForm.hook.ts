import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { journalEntrySchema } from "../schemas";

export interface TransactionPayload {
    accountId: number;
    type: string;
    amount: number;
}

export interface JournalEntryFormPayload {
    description: string;
    transactions: TransactionPayload[];
}

export function useJournalEntryForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm<JournalEntryFormPayload | any>({
        mode: "onTouched",
        resolver: yupResolver(journalEntrySchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
