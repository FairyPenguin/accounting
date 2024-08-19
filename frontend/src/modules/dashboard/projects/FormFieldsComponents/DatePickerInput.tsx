import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface DatePickerInputProps<RegisterInputsType extends FieldValues> {
    label: string;
    htmlFor: string;
    id: string;
    placeholder?: string;
    widthClass: "col-span-full" | string;
    register: UseFormRegister<RegisterInputsType>;
    registerName: Path<RegisterInputsType>;
    defaultValue?: string | number | readonly string[] | undefined;
}

export default function DatePickerInput<RegisterInputsType extends FieldValues>({
    widthClass,
    htmlFor,
    label,
    id,
    registerName,
    register,
    defaultValue,
}: DatePickerInputProps<RegisterInputsType>) {
    return (
        <div className={`${widthClass}`}>
            <div>
                <label htmlFor={htmlFor} className="mb-2 block">
                    {label}
                </label>
                <input
                    id={id}
                    type="date"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                    {...register(registerName)}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
}
