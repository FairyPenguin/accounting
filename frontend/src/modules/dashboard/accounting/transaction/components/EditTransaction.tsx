import { useCallback, useEffect } from "react";
import { TransactionForm } from "./TransactionForm";
import { EditTransactionProps } from "../interfaces";
import { useEditTransaction } from "../hooks/useEditTransaction.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { useGetTransactionDetails } from "../hooks/useGetTransactionDetails.hook";
import { TransactionFormPayload, useTransactionForm } from "../hooks/useTransactionForm.hook";

const breadcrumbItems = [
    {
        label: "Accounting",
        href: "/dashboard/accounting/overview",
    },
    { label: "Transactions", href: "/dashboard/accounting/transactions" },
    { label: "Edit", href: "#" },
];

export const EditTransaction: React.FC<EditTransactionProps> = ({ transactionId }) => {
    const { register, handleSubmit, errors, reset } = useTransactionForm();

    const { data: accountDetails } = useGetTransactionDetails(transactionId) as any;

    const values = { ...accountDetails?.data.data };

    const { mutate: editTransaction } = useEditTransaction();

    const onSubmit = useCallback(
        (data: TransactionFormPayload) => {
            editTransaction(
                { transactionId, data },
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
        [editTransaction, reset],
    );

    useEffect(() => {
        if (accountDetails) {
            const formValues = values;
            reset(formValues);
        }
    }, [accountDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Transaction:</h1>
                <TransactionForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={values}
                    submitButtonLabel="Edit Transaction"
                />
            </div>
        </form>
    );
};
