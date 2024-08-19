import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { DEFAULT_JOURNAL_ENTRIES_PAGE_SIZE } from "../constants";
import { useDeleteJournalEntry } from "../hooks/useDeleteJournalEntry.hook";
import { useGetAllJournalEntries } from "../hooks/useGetAllJournalEntries.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import TableV2 from "@/shared/components/TableV2";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";

export const JournalEntriesList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_JOURNAL_ENTRIES_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { data: journalEntriesData } = useGetAllJournalEntries(queryParams) as any;

    const { mutate: deleteJournalEntry } = useDeleteJournalEntry();

    // const handleDeleteJournalEntry = (journalEntry: string) => {
    //     deleteJournalEntry(journalEntry);
    // };

    const handleEditJournalEntry = (id: string) => {
        router.push(`/dashboard/accounting/journal-entries/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "referenceNumber",
            title: "Reference Number",
            render: ({ referenceNumber }: any) => <div>{referenceNumber}</div>,
        },
        {
            accessor: "description",
            title: "Description",
            render: ({ description }: any) => <div>{description}</div>,
        },
        {
            accessor: "totalAmount",
            title: "Total Amount",
            render: ({ totalAmount }: any) => <div>{totalAmount}</div>,
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
                //     <Link href={`/dashboard/accounting/journal-entries/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteJournalEntry(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditJournalEntry(id)}
                        type="button"
                        aria-label="Edit JournalEntry"
                    >
                        <IconEdit />
                    </button>
                    <button
                        onClick={() => {
                            handleTableDeleteActionButton(id);
                            openModalHandler();
                        }}
                        type="button"
                        aria-label="Delete JournalEntry"
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
            endpoint={"journal-entries"}
            tableTitle="Journal entries List"
            searchBy="Search by Journal entries reference number...."
            searchByKey="referenceNumber"
            newResourceLink="/dashboard/accounting/journal-entries/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("journal-entries", "/dashboard/journal-entries")}
            createNewItemButtonText={"Add New Journal Entry"}
        />
    );
};

export default JournalEntriesList;
