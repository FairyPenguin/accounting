import { useForm } from "react-hook-form";
import { CountrySchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useCountryForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(CountrySchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
