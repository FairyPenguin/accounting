import { useForm } from "react-hook-form";
import { StateSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useStateForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(StateSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
