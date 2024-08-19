import React from "react";
import { useCallback } from "react";
import { JournalEntryForm } from "./JournalEntryForm";
import { useAddJournalEntry } from "../hooks/useAddJournalEntry.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { JournalEntryFormPayload, useJournalEntryForm } from "../hooks/useJournalEntryForm.hook";

const breadcrumbItems = [
    { label: "Accounting", href: "/dashboard/accounting/overview" },
    { label: "Journal Entries", href: "/dashboard/accounting/journal-entries" },
    { label: "Create", href: "#" },
];

export const AddJournalEntry: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useJournalEntryForm();
    const { mutate: addJournalEntry } = useAddJournalEntry();

    const onSubmit = useCallback(
        (data: JournalEntryFormPayload) => {
            addJournalEntry(data, {
                onSuccess: () => {
                    reset();
                },
                onError: (error) => {
                    console.error("Mutation failed:", error);
                },
            });
        },
        [addJournalEntry, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Journal Entry:</h1>
                <JournalEntryForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Journal Entry"
                />
            </div>
        </form>
    );
};
