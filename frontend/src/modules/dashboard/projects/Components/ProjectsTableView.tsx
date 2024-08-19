"use client";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import Link from "next/link";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV3 from "./TableV3.Staging";

export default function ProjectsTableView() {
    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const myColumns = [
        {
            accessor: "name",
            title: "Project Name",
            render: ({ name, uuid, id }: Project) => (
                <Link href={`projects/${uuid}?projectId=${id}&projectName=${name}`}>{name}</Link>
            ),
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
                    <Link href={`/dashboard/projects/${uuid}/edit`}>
                        <IconEdit />
                    </Link>

                    <button
                        onClick={() => {
                            handleTableDeleteActionButton(uuid);
                            openModalHandler();
                        }}
                    >
                        <IconTrash />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <TableV3<Project>
                columns={myColumns}
                endpoint={"projects"}
                tableTitle="Projects List"
                newResourceLink={"/dashboard/projects/new-project"}
                UUID={UUID}
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleModalDeleteButttonFunc={() => handleModalDeleteButtton("projects", "/dashboard/projects")}
                createNewItemButtonText={"Create New Project"}
            />
        </>
    );
}
