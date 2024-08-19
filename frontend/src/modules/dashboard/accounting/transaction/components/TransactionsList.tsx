import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { DEFAULT_TRANSACTIONS_PAGE_SIZE } from "../constants";
import { useDeleteTransaction } from "../hooks/useDeleteTransaction.hook";
import { useGetAllTransactions } from "../hooks/useGetAllTransactions.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import TableV2 from "@/shared/components/TableV2";
import { Transactions } from "@/modules/dashboard/projects/Services/FetchAllTransactions";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";

export const TransactionsList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_TRANSACTIONS_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();


    const { data: transactionsData } = useGetAllTransactions(queryParams) as any;

    const { mutate: deleteTransaction } = useDeleteTransaction();

    // const handleDeleteTransaction = (transactionId: string) => {
    //     deleteTransaction(transactionId);
    // };

    const handleEditTransfer = (id: string) => {
        router.push(`/dashboard/accounting/transactions/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "referenceNumber",
            title: "Reference Number",
            render: (row: any) => <div>{row.referenceNumber}</div>,
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
            accessor: "amount",
            title: "Amount",
            render: ({ amount }: any) => <div>{amount}</div>,
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
                //     <Link href={`/dashboard/accounting/transactions/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteTransaction(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                <button
                    onClick={() => handleEditTransfer(id)}
                    type="button"
                    aria-label="Edit Transfer"
                >
                    <IconEdit />
                </button>
                <button
                    onClick={() => {
                        handleTableDeleteActionButton(id);
                        openModalHandler();
                    }}
                    type="button"
                    aria-label="Delete Transfer"
                >
                    <IconTrash />
                </button>
            </div>
            ),
        },
    ];

    return (
        <TableV2<Transactions>
            columns={myColumns}
            endpoint={"transactions"}
            tableTitle="Transactions List"
            searchBy="Search by transaction reference number...."
            searchByKey="referenceNumber"
            newResourceLink="/dashboard/accounting/transactions/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("transactions", "/dashboard/transactions")}
            createNewItemButtonText={"Add New Transaction"}
        />
    );
};

export default TransactionsList;
