import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../Components/ProjectCreationForm";

interface TextInputProps<RegisterInputsType extends FieldValues> {
    label: string;
    htmlFor: string;
    id: string;
    autoComplete?: string;
    placeholder?: string;
    widthClass: "sm:col-span-4" | string;
    defaultValue?: string;
    register: UseFormRegister<RegisterInputsType>;
    registerName: Path<RegisterInputsType>;
    disabled?: boolean;
}

export default function TextInput<RegisterInputsType extends FieldValues>({
    widthClass,
    htmlFor,
    label,
    id,
    autoComplete,
    placeholder,
    defaultValue,
    registerName,
    disabled,
    register,
}: TextInputProps<RegisterInputsType>) {
    return (
        <div className={`${widthClass}`}>
            <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        id={id}
                        autoComplete={autoComplete}
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        {...register(registerName)}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
}
