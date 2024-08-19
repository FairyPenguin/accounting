import { FieldValues, Path, SubmitHandler, UseFormRegister } from "react-hook-form";
import { Inputs } from "../Components/ProjectCreationForm";

interface RadioGroupInputProps<RegisterInputsType extends FieldValues> {
    label: string;
    radioLabel: string;
    htmlFor: string;
    id: string;
    autoComplete?: string;
    placeholder?: string;
    widthClass: "sm:col-span-4" | string;
    defaultValue?: string;
    register: UseFormRegister<RegisterInputsType>;
    registerName: Path<RegisterInputsType>;
}

export default function RadioGroupInput<RegisterInputsType extends FieldValues>({
    widthClass,
    htmlFor,
    label,
    radioLabel,
    id,
    autoComplete,
    placeholder,
    defaultValue,
    registerName,
    register,
}: RadioGroupInputProps<RegisterInputsType>) {
    return (
        <div className={`${widthClass}`}>
            <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <div className="flex items-center">
                    <div className="flex items-center gap-x-6">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                value="option1"
                                className="mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                                id={id}
                                {...register(registerName)}
                            />
                            <label htmlFor={id} className="mb-0 ms-2 text-sm text-gray-500 dark:text-neutral-400">
                                {radioLabel}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
