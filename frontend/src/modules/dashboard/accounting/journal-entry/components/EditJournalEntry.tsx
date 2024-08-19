import React, { useCallback, useEffect } from "react";
import { JournalEntryForm } from "./JournalEntryForm";
import { useEditJournalEntry } from "../hooks/useEditJournalEntry.hook";
import { useGetJournalEntryDetails } from "../hooks/useGetJournalEntryDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { JournalEntryFormPayload, useJournalEntryForm } from "../hooks/useJournalEntryForm.hook";

const breadcrumbItems = [
    { label: "Accounting", href: "/dashboard/accounting/overview" },
    { label: "Journal Entries", href: "/dashboard/accounting/journal-entries" },
    { label: "Edit", href: "#" },
];

export const EditJournalEntry: React.FC<{ journalEntryId: string }> = ({ journalEntryId }) => {
    const { register, handleSubmit, errors, reset } = useJournalEntryForm();
    const { data: journalEntryDetails } = useGetJournalEntryDetails(journalEntryId) as any;
    const values = { ...journalEntryDetails?.data.data };

    const { mutate: editJournalEntry } = useEditJournalEntry();

    const onSubmit = useCallback(
        (data: JournalEntryFormPayload) => {
            editJournalEntry(
                { journalEntryId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                    onError: (error) => {
                        console.log(error);
                    },
                },
            );
        },
        [editJournalEntry, reset, journalEntryId],
    );

    useEffect(() => {
        if (journalEntryDetails) {
            const formValues = values;
            reset(formValues);
        }
    }, [journalEntryDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Journal Entry:</h1>
                <JournalEntryForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    values={values}
                    onSubmit={onSubmit}
                    submitButtonLabel="Edit Journal Entry"
                />
            </div>
        </form>
    );
};
