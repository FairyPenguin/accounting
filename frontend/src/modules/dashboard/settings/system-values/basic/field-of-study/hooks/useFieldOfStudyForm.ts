import { useForm } from "react-hook-form";
import { FieldOfStudySchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useFieldOfStudyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(FieldOfStudySchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
