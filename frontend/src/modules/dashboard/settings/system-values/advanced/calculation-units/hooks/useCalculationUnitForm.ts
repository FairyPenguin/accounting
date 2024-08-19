import { useForm } from "react-hook-form";
import { CalculationUnitSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useCalculationUnitForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(CalculationUnitSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
