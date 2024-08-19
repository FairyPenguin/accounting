import { IconDownArrow } from "../../icon/icon-down-arrow";
import { UseFormRegister, FieldValues, RegisterOptions, Path } from "react-hook-form";

interface Option {
    label: string;
    value: string | number;
}

interface CustomSelectProps<TFormValues extends FieldValues> {
    id: string;
    register: UseFormRegister<TFormValues>;
    name: Path<TFormValues>;
    rules?: RegisterOptions<TFormValues, Path<TFormValues> & (string | undefined)> | undefined;
    options: Option[];
    className?: string;
    placeholder?: string;
    label?: string;
    selectedOption?: string | number;
}

export const CustomSelectField = <TFormValues extends FieldValues>({
    id,
    register,
    name,
    rules = {},
    options,
    className = "",
    placeholder = "",
    label,
    selectedOption,
    ...rest
}: CustomSelectProps<TFormValues> & React.SelectHTMLAttributes<HTMLSelectElement>) => {
    const isRequired = rules?.required;

    return (
        <div className="relative">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                    {isRequired && <span className="ml-1 text-lg font-extrabold text-red-500">*</span>}
                </label>
            )}
            <select
                id={id}
                {...register(name, rules)}
                defaultValue={selectedOption}
                className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 leading-tight text-gray-500 shadow focus:outline-none ${className}`}
                {...rest}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options?.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <IconDownArrow className="pointer-events-none absolute right-4 top-12" />
        </div>
    );
};
