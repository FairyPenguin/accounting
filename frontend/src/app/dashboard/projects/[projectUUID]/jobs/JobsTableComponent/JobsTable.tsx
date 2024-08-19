"use client";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { useEffect, useState } from "react";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import Link from "next/link";
import { JobInProjectJobsList } from "@/modules/dashboard/projects/Services/FetchProjectJobs";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { deleteItemFromTable } from "@/modules/dashboard/projects/Services/DeleteActions";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";

interface JobsTableProps {
    // columns: Column[];
    // endpoint: string;
    tableTitle: string;
    // createNewItemButtonText: string;
    // newResourceLink: string;
    UUID: string;
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalDeleteButttonFunc: () => Promise<void>;
    // data?: any;
    // refreshData?: boolean;
    records: JobInProjectJobsList[];
    projectData: ProjectByUUID;
}

export default function JobsTable({ records, projectData }: JobsTableProps) {
    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const jobsTableColumns = [
        {
            accessor: "id",
            title: "Job ID",
            render: ({ id }: JobInProjectJobsList) => <div>{id}</div>,
        },
        {
            accessor: "name",
            title: "Job Name",
            render: ({ name, uuid, id }: JobInProjectJobsList) => (
                <Link href={`/dashboard/projects/${projectData.uuid}/jobs/${uuid}`}>{name}</Link>
            ),
        },

        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                <div className="flex max-w-4 justify-around gap-2">
                    <Link href={`/dashboard/projects/${projectData.uuid}/jobs/${uuid}/edit`}>
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
            <DeleteConfirmModal
                opened={openModal}
                close={() => setOpenModal(false)}
                actionFunc={() => handleModalDeleteButtton("jobs", `/dashboard/projects/${projectData.uuid}`)} // actionFunc={() => deleteItemFromTable(UUID, "projects", "dashboard/projects")}
            />
            <DataTable
                withTableBorder
                withColumnBorders
                records={records}
                columns={jobsTableColumns}
                // sortStatus={sortStatus}
                // onSortStatusChange={setSortStatus}
                highlightOnHover
                height={500}
                noRecordsText="No records Found"
            />
        </>
    );
}
