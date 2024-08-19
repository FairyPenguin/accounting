"use client";
import TableV3 from "@/modules/dashboard/projects/Components/TableV3.Staging";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import { Quote } from "@/modules/dashboard/quotes/Types/QuoteType";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import Link from "next/link";

function QuotesTableView() {
    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const myColumns = [
        {
            accessor: "name",
            title: "Project Name",
            render: ({ name, uuid, id }: Quote) => <Link href={`quotes/${uuid}`}>{name}</Link>,
        },
        {
            accessor: "client.name",
            title: "Client",
            render: ({ client }: any) => <div>{client.name}</div>,
        },
        {
            accessor: "primaryPM.firstName",
            title: "Primary PM",
            render: ({ primaryPM }: any) => (
                <div>
                    {primaryPM.firstName} {primaryPM.lastName}
                </div>
            ),
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
            render: ({ id, uuid }: any) => (
                <div className="flex max-w-4 justify-around gap-2">
                    <Link
                        href={"#"}
                        // href={`/dashboard/quotes/${uuid}/edit`}
                    >
                        <IconEdit />
                    </Link>
                    <button
                    // onClick={() => {
                    //     handleTableDeleteActionButton(uuid);
                    //     openModalHandler();
                    // }}
                    >
                        <IconTrash />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <>
                <TableV3<Quote>
                    columns={myColumns}
                    endpoint={"quotations"}
                    tableTitle="Quotation List"
                    newResourceLink={"/dashboard/quotes/new-quote"}
                    UUID={UUID}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleModalDeleteButttonFunc={() => handleModalDeleteButtton("quotations", "/dashboard/quotes")}
                    createNewItemButtonText={"Create New Quote"}
                />
            </>
        </div>
    );
}

export default QuotesTableView;
