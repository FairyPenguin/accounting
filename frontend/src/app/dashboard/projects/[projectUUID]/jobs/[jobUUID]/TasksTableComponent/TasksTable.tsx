"use client";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { useEffect, useState } from "react";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import Link from "next/link";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { deleteItemFromTable } from "@/modules/dashboard/projects/Services/DeleteActions";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import { TaskInJobTasksList } from "@/modules/dashboard/projects/Services/FetchJobTasks";

interface TasksTableProps {
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
    records: TaskInJobTasksList[];
    projectUUID: string;
    jobData: JobByUUID;
    jobUUID: string;
}

export default function TasksTable({ records, projectUUID, jobData, jobUUID }: TasksTableProps) {
    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const TasksTableColumns = [
        {
            accessor: "id",
            title: "Task ID",
            render: ({ id }: TaskInJobTasksList) => <div>{id}</div>,
        },
        {
            accessor: "name",
            title: "Task Name",
            render: ({ name, uuid, id }: TaskInJobTasksList) => (
                <Link href={`/dashboard/projects/${projectUUID}/jobs/${jobUUID}/tasks/${uuid}`}>{name}</Link>
            ),
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                <div className="flex max-w-4 justify-around gap-2">
                    <Link href={`/dashboard/projects/${projectUUID}/jobs/${jobUUID}/tasks/${uuid}/edit`}>
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
                actionFunc={() =>
                    handleModalDeleteButtton("tasks", `/dashboard/projects/${projectUUID}/jobs/${jobUUID}`)
                } // actionFunc={() => deleteItemFromTable(UUID, "projects", "dashboard/projects")}
            />
            <DataTable
                withTableBorder
                withColumnBorders
                records={records}
                columns={TasksTableColumns}
                // sortStatus={sortStatus}
                // onSortStatusChange={setSortStatus}
                highlightOnHover
                height={500}
                noRecordsText="No records Found"
            />
        </>
    );
}
