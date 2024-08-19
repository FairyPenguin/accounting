import { useForm } from "react-hook-form";
import { accountSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export interface AccountFormPayload {
    name: string;
    description: string;
    type: string;
    balance: string;
    parentId?: string;
}

export function useAccountForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm<AccountFormPayload | any>({
        mode: "onTouched",
        resolver: yupResolver(accountSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
