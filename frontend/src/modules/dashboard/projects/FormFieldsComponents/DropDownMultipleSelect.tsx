"use client";

import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { Inputs } from "../Components/ProjectCreationForm";
import { MultiSelect, MultiSelectProps } from "@mantine/core";

interface language {
    value: string;
    label: string;
}

interface DropDownMultipleSelectProps<RegisterInputsType extends FieldValues> {
    htmlFor: string;
    id: string;
    label: string;
    autoComplete?: string;
    placeholder?: string;
    widthClass: "sm:col-span-4" | string;
    defaultValue?: string;
    register: UseFormRegister<RegisterInputsType>;
    registerName: Path<RegisterInputsType>;
    children?: React.ReactNode;
    data: language[] | string[];
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function DropDownMultipleSelect<RegisterInputsType extends FieldValues>({
    widthClass,
    label,
    htmlFor,
    id,
    autoComplete,
    defaultValue,
    registerName,
    register,
    children,
    data,
    value,
    setValue,
}: DropDownMultipleSelectProps<RegisterInputsType>) {
    return (
        <div className={`${widthClass}`}>
            <label htmlFor={htmlFor} className="block  text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <MultiSelect
                    {...register(registerName)}
                    placeholder="Pick language"
                    searchable // search
                    hidePickedOptions
                    maxDropdownHeight={200} //Scrollable
                    value={value}
                    onChange={setValue}
                    data={data}
                    multiple
                    style={{
                        width: "100%",
                        // paddingTop: "0.5rem",
                        // paddingBottom: "0.5rem",
                        display: "block",
                        // paddingLeft: "0.75rem",
                        // paddingRight: "0.75rem",
                        borderRadius: "0.375rem",
                        borderWidth: "1px",
                        borderColor: "#D1D5DB",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                    }}
                />
            </div>
        </div>
    );
}

interface language {
    value: string;
    label: string;
}
