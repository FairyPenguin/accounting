"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Client } from "../../projects/Services/FetchAllClients";
import useDeleteConfirmModalWithTableHook from "../../projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export default function ClientsTable() {
    const router = useRouter();
    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const handleEditClient = (id: string, uuid: string) => {
        router.push(`/dashboard/clients/${id}/edit?clientuuid=${uuid}`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Client Name",
            render: ({ name, uuid, id }: Client) => (
                <Link href={`clients/${id}?clientuuid=${uuid}&clientName=${name}`}>{name}</Link>
            ),
        },
        {
            accessor: "email",
            title: "Email",
            render: ({ email }: any) => <div>{email}</div>,
        },
        {
            accessor: "contactNumber",
            title: "Contact Number",
            render: ({ contactNumber }: any) => <div>{contactNumber}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditClient(id, uuid)}
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

    const newResourceLink = "/dashboard/clients/new-client";

    return (
        <>

            <TableV2<Client>
                columns={myColumns}
                endpoint={"clients"}
                tableTitle="Clients List"
                searchBy="Search by client name...."
                searchByKey="name"
                newResourceLink={newResourceLink}
                UUID={UUID}
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleModalDeleteButttonFunc={() => handleModalDeleteButtton("clients", "/dashboard/clients")}
                createNewItemButtonText={"Add New Client"}
            />
        </>
    );
}
