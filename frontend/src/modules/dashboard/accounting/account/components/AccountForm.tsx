import React from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { AccountFormPayload } from "../hooks/useAccountForm.hook";
import { useGetAllAccounts } from "../hooks/useGetAllAccounts.hook";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";
import { CustomSelectField } from "@/shared/components/forms/select-field/CustomSelectField";

export interface AccountFormProps {
    values?: AccountFormPayload;
    register: UseFormRegister<AccountFormPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const AccountForm: React.FC<AccountFormProps> = ({ values, register, errors, submitButtonLabel }) => {
    const { data: accountsData } = useGetAllAccounts({ page: 1, limit: 50 }) as any;

    const accounts = accountsData?.data?.data.map((account: any) => ({
        label: account.name,
        value: account.id,
    }));

    return (
        <div>
            <div className="flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="name"
                        name="name"
                        register={register}
                        placeholder="Prepaid Expenses"
                        autoComplete="off"
                        rules={{ required: "Name is required!" }}
                        label="Name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{`${errors.name.message}`}</p>}
                </div>
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="type"
                        name="type"
                        register={register}
                        placeholder="Enter Type"
                        autoComplete="off"
                        rules={{ required: "Type is required!" }}
                        label="Type"
                    />
                    {errors.type && <p className="mt-2 text-sm text-red-600">{`${errors.type.message}`}</p>}
                </div>
            </div>

            <div className="my-5 flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="description"
                        name="description"
                        register={register}
                        placeholder="Payments made in advance for goods or services to be received in the future."
                        autoComplete="off"
                        rules={{ required: "Description is required!" }}
                        label="Description"
                    />
                    {errors.description && (
                        <p className="mt-2 text-sm text-red-600">{`${errors.description.message}`}</p>
                    )}
                </div>
            </div>

            <div className="flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="balance"
                        name="balance"
                        type="number"
                        register={register}
                        placeholder="1000"
                        rules={{ required: "Balance is required!" }}
                        label="Balance"
                    />
                    {errors.balance && <p className="mt-2 text-sm text-red-600">{`${errors.balance.message}`}</p>}
                </div>

                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="parentId"
                        name="parentId"
                        register={register}
                        options={accounts}
                        placeholder="Select Parent Account"
                        label="Parent Account"
                        selectedOption={values?.parentId || ""}
                    />
                    {errors.parentId && <p className="mt-2 text-sm text-red-600">{`${errors.parentId.message}`}</p>}
                </div>
            </div>

            <div className="mt-7 flex justify-center">
                <button
                    type="submit"
                    className="w-80 whitespace-nowrap rounded-lg bg-purple-600 px-3 py-2 text-center font-semibold text-white"
                >
                    {submitButtonLabel}
                </button>
            </div>
        </div>
    );
};
