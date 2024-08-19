import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconEdit from "@/shared/components/icon/icon-edit";
import { DEFAULT_TRANSFERS_PAGE_SIZE } from "../constants";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useDeleteTransfer } from "../hooks/useDeleteTransfer.hook";
import { useGetAllTransfers } from "../hooks/useGetAllTransfers.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export const TransfersList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_TRANSFERS_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { data: transfersData } = useGetAllTransfers(queryParams) as any;

    const { mutate: deleteTransfer } = useDeleteTransfer();

    // const handleDeleteTransfer = (transferId: string) => {
    //     deleteTransfer(transferId);
    // };

    const handleEditTransfer = (id: string) => {
        router.push(`/dashboard/accounting/transfers/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "referenceNumber",
            title: "Reference Number",
            render: (row: any) => <div>{row.referenceNumber}</div>,
        },
        {
            accessor: "fromAccount.name",
            title: "From",
            render: (row: any) => <div>{row.fromAccount.name}</div>,
        },
        {
            accessor: "toAccount.name",
            title: "To",
            render: (row: any) => <div>{row.toAccount.name}</div>,
        },
        {
            accessor: "amountTransferred",
            title: "Amount Transferred",
            render: (row: any) => <div>{row.amount}</div>,
        },
        {
            accessor: "before",
            title: "Before",
            render: (row: any) => <div>{parseFloat(row.fromAccount.balance).toFixed(2)}</div>,
        },
        {
            accessor: "after",
            title: "After",
            render: (row: any) => <div>{(parseFloat(row.toAccount.balance) + parseFloat(row.amount)).toFixed(2)}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id }: any) => (
                // <div className="flex max-w-4 justify-around gap-2">
                //     <Link href={`/dashboard/accounting/transfers/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteTransfer(id)}>
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
        <TableV2
            columns={myColumns}
            endpoint={"transfers"}
            tableTitle="Transfers List"
            searchBy="Search by transfer reference number...."
            searchByKey="referenceNumber"
            newResourceLink="/dashboard/accounting/transfers/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("transfers", "/dashboard/transfers")}
            createNewItemButtonText={"Add New Transfer"}
        />
    );
};

export default TransfersList;
