"use client";

import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import useDeleteConfirmModalWithRouteHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithRouteHook";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { PM } from "@/modules/dashboard/projects/Services/FetchAllPMs";
import { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { TaskCreationRes, TaskInJobTasksList } from "@/modules/dashboard/projects/Services/FetchJobTasks";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import Link from "next/link";
import TaskAssignments from "./TaskAssignments";
import { TaskByUUID } from "@/modules/dashboard/projects/Services/FetchSingleTaskByUUID";
import ProjectBreadcrumbs from "@/modules/dashboard/projects/Components/ProjectBreadcrumbs";
import GoBackButton from "@/app/dashboard/projects/GoBackButton";

// Vendors

interface TaskViewProps {
    job: JobByUUID;
    project: ProjectByUUID;
    task: TaskByUUID;
    tasks?: TaskInJobTasksList[];
    projectUUID: string;
    jobUUID: string;
    vendors: Vendor[];
    units?: Unit[];
    PMs?: PM[];
    postFunc?: (
        data?: any,
        value?: any,
        responseData?: any,
        setResponseData?: any,
        setProjectSuccess?: any,
    ) => Promise<void>;
}

export default function TaskView({ projectUUID, jobUUID, task, vendors, job, project }: TaskViewProps) {
    const { opened, open, close, deleteItemFromItemView } = useDeleteConfirmModalWithRouteHook();

    return (
        <>
            <DeleteConfirmModal
                opened={opened}
                close={close}
                actionFunc={async () =>
                    await deleteItemFromItemView(
                        task.uuid,
                        "tasks",
                        `/dashboard/projects/${projectUUID}/jobs/${jobUUID}`,
                    )
                }
            />

            {/* ProjectBreadcrumbs */}

            <section className="mb-6 flex items-center gap-x-4 w-auto rounded-md border-b border-gray-900/10">
                <GoBackButton />
                <ProjectBreadcrumbs
                    projectName={project.name}
                    projectURL={project.uuid}
                    projectId={project.id}
                    jobName={job.name}
                    jobURL={job.uuid}
                    taskName={task.name}
                    taskURL={task.uuid}
                    indexLevel={3}
                />
            </section>

            {/*  */}

            <section className="Top-Menu flex justify-between border-b border-gray-900/10 pb-3 pt-2">
                <div>
                    <h1 className="text-2xl font-bold">Task Details</h1>
                </div>
                <div>
                    {/* ------------BUTTONS------------ */}

                    <div className="flex justify-end space-x-4 ">
                        {/* Add Jobs Button */}

                        {/* Edit project Button */}

                        <Link
                            href={`${task.uuid}/edit`}
                            className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                        >
                            Edit Task
                        </Link>

                        {/* Delete Button */}

                        <button
                            onClick={open}
                            type="button"
                            className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                        >
                            Delete Task
                        </button>
                    </div>

                    {/* ------------BUTTONS------------ */}
                </div>
            </section>
            {/*  */}

            <section>
                <ul>
                    <li>{task.uuid}</li>
                    <li>{task.id}</li>
                    <li>{task.jobId}</li>
                    <br />
                    <li className="text-2xl font-bold">{task.name}</li>
                    <li className="text-2xl font-bold">{task.description}</li>
                    <li className="text-2xl font-bold">{task.workQuantity}</li>
                </ul>
            </section>

            <TaskAssignments
                vendorsArray={vendors}
                taskUUID={task.uuid}
                projectUUID={projectUUID}
                jobUUID={jobUUID}
                taskData={task}
            />
        </>
    );
}
