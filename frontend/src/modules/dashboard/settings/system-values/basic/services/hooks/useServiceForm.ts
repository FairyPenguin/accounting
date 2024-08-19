import { useForm } from "react-hook-form";
import { ServiceSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useServiceForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(ServiceSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
