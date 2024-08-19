import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconView from "@/shared/components/icon/icon-view";
import IconEdit from "@/shared/components/icon/icon-edit";
import { DEFAULT_ACCOUNTS_PAGE_SIZE } from "../constants";
import { IconCog } from "@/shared/components/icon/icon-cog";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useDeleteAccount } from "../hooks/useDeleteAccount.hook";
import { useGetAllAccounts } from "../hooks/useGetAllAccounts.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { Account } from "../../../projects/Services/FetchAllAccounts"
import TableV2 from "@/shared/components/TableV2";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";

export const AccountsList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_ACCOUNTS_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { data: accountsData } = useGetAllAccounts(queryParams) as any;

    const { mutate: deleteAccount } = useDeleteAccount();

    // const handleDeleteAccount = (accountId: string) => {
    //     deleteAccount(accountId);
    // };

    const handleEditAccount = (id: string) => {
        router.push(`/dashboard/accounting/accounts/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "referenceNumber",
            title: "Reference Number",
            render: (row: any) => <div>{row.referenceNumber}</div>,
        },
        {
            accessor: "name",
            title: "Name",
            render: ({ name }: any) => <div>{name}</div>,
        },
        {
            accessor: "description",
            title: "Description",
            render: ({ description }: any) => <div>{description}</div>,
        },
        {
            accessor: "type",
            title: "Type",
            render: ({ type }: any) => <div>{type}</div>,
        },
        {
            accessor: "balance",
            title: "Balance",
            render: ({ balance }: any) => <div>{balance}</div>,
        },
        {
            accessor: "status",
            title: "Status",
            render: ({ status }: any) => <div>{status}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id }: any) => (
                // <div className="flex max-w-4 justify-around gap-2">
                //     <Link href={`/dashboard/accounting/accounts/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteAccount(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                <button
                    onClick={() => handleEditAccount(id)}
                    type="button"
                    aria-label="Edit Account"
                >
                    <IconEdit />
                </button>
                <button
                    onClick={() => {
                        handleTableDeleteActionButton(id);
                        openModalHandler();
                    }}
                    type="button"
                    aria-label="Delete Account"
                >
                    <IconTrash />
                </button>
            </div>
            ),
        },
    ];

    const newResourceLink = "/dashboard/accounting/accounts/new";

    return (
        <TableV2<Account>
            columns={myColumns}
            endpoint={"accounts"}
            tableTitle="Accounts List"
            searchBy="Search by account name...."
            searchByKey="name"
            newResourceLink={newResourceLink}
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("accounts", "/dashboard/accounts")}
            createNewItemButtonText={"Add New Account"}
        />
    );
};

export default AccountsList;
