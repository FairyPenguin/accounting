"use client";

import { EditTransaction } from "@/modules/dashboard/accounting/transaction/components/EditTransaction";
import { EditTransactionPageProps } from "@/modules/dashboard/accounting/transaction/interfaces";

const EditTransactionPage: React.FC<EditTransactionPageProps> = ({ params: { transactionId } }) => {
    return <EditTransaction transactionId={String(transactionId)} />;
};

export default EditTransactionPage;
