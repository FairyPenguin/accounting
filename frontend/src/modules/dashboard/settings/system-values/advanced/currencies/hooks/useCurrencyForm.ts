import { useForm } from "react-hook-form";
import { CurrencySchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useCurrencyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(CurrencySchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
