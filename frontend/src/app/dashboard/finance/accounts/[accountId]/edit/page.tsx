"use client";
import { EditAccountPageProps } from "@/modules/dashboard/accounting/account/interfaces";
import { EditAccount } from "@/modules/dashboard/accounting/account/components/EditAccount";

const EditAccountPage: React.FC<EditAccountPageProps> = ({ params: { accountId } }) => {
    return <EditAccount accountId={String(accountId)} />;
};

export default EditAccountPage;
