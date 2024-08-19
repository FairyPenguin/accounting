"use client";
import { EditTransfer } from "@/modules/dashboard/accounting/transfer/components/EditTransfer";
import { EditTransferPageProps } from "@/modules/dashboard/accounting/transfer/interfaces";

const EditTransferPage: React.FC<EditTransferPageProps> = ({ params: { transferId } }) => {
    return <EditTransfer transferId={String(transferId)} />;
};

export default EditTransferPage;
