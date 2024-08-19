import { TransferForm } from "./TransferForm";
import React, { useCallback, useEffect } from "react";
import { useEditTransfer, useGetTransferDetails } from "../hooks";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { TransferFormPayload, useTransferForm } from "../hooks/useTransferForm.hook";

const breadcrumbItems = [
    { label: "Accounting", href: "/dashboard/accounting/overview" },
    { label: "Transfers", href: "/dashboard/accounting/transfers" },
    { label: "Edit", href: "#" },
];

export const EditTransfer: React.FC<{ transferId: string }> = ({ transferId }) => {
    const { register, handleSubmit, errors, reset } = useTransferForm();

    const { data: transferDetails } = useGetTransferDetails(transferId) as any;

    const values = { ...transferDetails?.data.data };

    const { mutate: editTransfer } = useEditTransfer();

    const onSubmit = useCallback(
        (data: TransferFormPayload) => {
            editTransfer(
                { transferId, data },
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
        [editTransfer, reset],
    );

    useEffect(() => {
        if (transferDetails) {
            const formValues = values;
            reset(formValues);
        }
    }, [transferDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Transfer:</h1>
                <TransferForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={values}
                    submitButtonLabel="Edit Transfer"
                />
            </div>
        </form>
    );
};
