import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface DropDownSelectProps<RegisterInputsType extends FieldValues> {
    label: string;
    htmlFor: string;
    id: string;
    autoComplete?: string;
    placeholder?: string;
    widthClass: "sm:col-span-4" | string;
    defaultValue?: string;
    register: UseFormRegister<RegisterInputsType>;
    registerName: Path<RegisterInputsType>;
    children?: React.ReactNode;
    disabled?: boolean;
}

export default function DropDownSelect<RegisterInputsType extends FieldValues>({
    widthClass,
    label,
    htmlFor,
    id,
    autoComplete,
    defaultValue,
    registerName,
    register,
    children,
    disabled,
}: DropDownSelectProps<RegisterInputsType>) {
    return (
        <div className={`${widthClass}`}>
            <label htmlFor={htmlFor} className="block  text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <select
                    disabled={disabled}
                    {...register(registerName)}
                    defaultValue={defaultValue}
                    id={id}
                    autoComplete={autoComplete}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                >
                    {children}
                </select>
            </div>
        </div>
    );
}
