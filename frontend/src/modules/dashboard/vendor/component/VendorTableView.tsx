"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Client } from "../../projects/Services/FetchAllClients";
import useDeleteConfirmModalWithTableHook from "../../projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export default function VendorTable() {
    const router = useRouter();
    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const handleEditVendor = (id: string, uuid: string) => {
        router.push(`/dashboard/clients/${id}/edit?clientuuid=${uuid}`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Vendor Name",
            render: ({ name, uuid, id }: Client) => (
                <Link href={`clients/${id}?clientuuid=${uuid}&clientName=${name}`}>{name}</Link>
            ),
        },
        {
            accessor: "type",
            title: "Type",
            render: ({ type }: any) => <div>{type}</div>,
        },
        {
            accessor: "contactNumber",
            title: "Contact Number",
            render: ({ contactNumber }: any) => <div>{contactNumber}</div>,
        },
        {
            accessor: "note",
            title: "Note",
            render: ({ note }: any) => <div>{note}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditVendor(id, uuid)}
                        type="button"
                        aria-label="Edit Client"
                    >
                        <IconEdit />
                    </button>
                    <button
                        onClick={() => {
                            handleTableDeleteActionButton(uuid);
                            openModalHandler();
                        }}
                        type="button"
                        aria-label="Delete Client"
                    >
                        <IconTrash />
                    </button>
                </div>
            ),
        },
    ];


    return (
        <>

            <TableV2<Client>
                columns={myColumns}
                endpoint={"vendors"}
                tableTitle="Vendors List"
                searchBy="Search by vendor name...."
                searchByKey="name"
                newResourceLink="/dashboard/vendors/new-vendor"
                UUID={UUID}
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleModalDeleteButttonFunc={() => handleModalDeleteButtton("vendors", "/dashboard/vendors")}
                createNewItemButtonText={"Add New Vendor"}
            />
        </>
    );
}
