import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../Components/ProjectCreationForm";

interface TextAreaInputProps<RegisterInputsType extends FieldValues> {
    label: string;
    htmlFor: string;
    id: string;
    placeholder?: string;
    widthClass: "col-span-full" | string;
    register: UseFormRegister<RegisterInputsType>;
    registerName: Path<RegisterInputsType>;
    defaultValue?: string;
}

export default function TextAreaInput<RegisterInputsType extends FieldValues>({
    widthClass,
    htmlFor,
    label,
    id,
    placeholder,
    registerName,
    register,
    defaultValue,
}: TextAreaInputProps<RegisterInputsType>) {
    return (
        <>
            <div className={`${widthClass}`}>
                <label htmlFor={htmlFor} className="mb-2 block">
                    {label}
                </label>
                <textarea
                    id={id}
                    placeholder={placeholder}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                    {...register(registerName)}
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
}
