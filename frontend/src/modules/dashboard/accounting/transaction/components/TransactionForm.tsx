import React from "react";
import { useGetAllAccounts } from "../../account/hooks";
import { IJournalEntry } from "../../journal-entry/types";
import { useForm, UseFormRegister } from "react-hook-form";
import { useGetAllJournalEntries } from "../../journal-entry/hooks";
import { TransactionFormPayload } from "../hooks/useTransactionForm.hook";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";
import { CustomSelectField } from "@/shared/components/forms/select-field/CustomSelectField";

export interface TransactionFormProps {
    values?: TransactionFormPayload;
    register: UseFormRegister<TransactionFormPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
    values,
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitButtonLabel,
}) => {
    const { data: accountsData } = useGetAllAccounts({ page: 1, limit: 50 }) as any;
    const { data: journalEntriesData } = useGetAllJournalEntries({ page: 1, limit: 100 }) as any;

    const accounts = accountsData?.data?.data.map((account: any) => ({
        label: account.name,
        value: +account.id,
    }));

    const journalEntries = journalEntriesData?.data?.data.map((journalEntry: IJournalEntry) => ({
        label: journalEntry.referenceNumber,
        value: +journalEntry.id,
    }));

    return (
        <div>
            <div className="flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="accountId"
                        name="accountId"
                        register={register}
                        options={accounts}
                        placeholder="Select Account"
                        label="Account"
                        rules={{ required: "Account is required!" }}
                        selectedOption={values?.accountId || ""}
                    />
                    {errors.accountId && <p className="mt-2 text-sm text-red-600">{`${errors.accountId.message}`}</p>}
                </div>
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="journalEntryId"
                        name="journalEntryId"
                        register={register}
                        options={journalEntries}
                        placeholder="Select Journal Entry"
                        label="Journal Entry"
                        rules={{ required: "Journal Entry is required!" }}
                        selectedOption={values?.journalEntryId || ""}
                    />
                    {errors.journalEntryId && (
                        <p className="mt-2 text-sm text-red-600">{`${errors.journalEntryId.message}`}</p>
                    )}
                </div>
            </div>

            <div className="my-5 flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="type"
                        name="type"
                        register={register}
                        options={[
                            { label: "DEBIT", value: "DEBIT" },
                            { label: "CREDIT", value: "CREDIT" },
                        ]}
                        placeholder="Select Type"
                        label="Type"
                        rules={{ required: "Type is required!" }}
                        selectedOption={values?.type || ""}
                    />
                    {errors.type && <p className="mt-2 text-sm text-red-600">{`${errors.type.message}`}</p>}
                </div>
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="amount"
                        name="amount"
                        type="number"
                        register={register}
                        placeholder="Enter Amount"
                        autoComplete="off"
                        rules={{ required: "Amount is required!" }}
                        label="Amount"
                    />
                    {errors.amount && <p className="mt-2 text-sm text-red-600">{`${errors.amount.message}`}</p>}
                </div>
            </div>

            <div className="flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="description"
                        name="description"
                        register={register}
                        placeholder="Enter Description"
                        autoComplete="off"
                        rules={{ required: "Description is required!" }}
                        label="Description"
                    />
                    {errors.description && (
                        <p className="mt-2 text-sm text-red-600">{`${errors.description.message}`}</p>
                    )}
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
