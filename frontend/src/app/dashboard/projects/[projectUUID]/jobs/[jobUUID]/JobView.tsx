"use client";

import { TaskInJobTasksList } from "@/modules/dashboard/projects/Services/FetchJobTasks";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import TasksTable from "./TasksTableComponent/TasksTable";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import useDeleteConfirmModalWithRouteHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithRouteHook";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import JobViewTabs from "./JobVIewTabs/JobsViewTabs";
import TaskCreationForm from "@/modules/dashboard/projects/Components/TaskCreationForm";
import { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { PM } from "@/modules/dashboard/projects/Services/FetchAllPMs";
import TaskCreation from "./tasks/new-task/TaskCreation";
import { ChildFolder } from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";
import TreeC from "./Tree/Tree";
import RootFolderTree from "./JobVIewTabs/RootFolderTree";
import ProjectBreadcrumbs from "@/modules/dashboard/projects/Components/ProjectBreadcrumbs";
import GoBackButton from "../../../GoBackButton";

interface JobViewProps {
    job: JobByUUID;
    project: ProjectByUUID;
    tasks: TaskInJobTasksList[];
    projectUUID: string;
    jobUUID: string;
    vendors: Vendor[];
    units: Unit[];
    PMs: PM[];
    FoldersArray: ChildFolder[] | ProjectByUUID[];
    // FoldersArray: ChildFolder[];
    // postFunc: () // data: any,
    // // value?: any,
    // // responseData?: any,
    // // setResponseData?: any,
    // // setProjectSuccess?: any,
    // => Promise<void>;
}

export default function JobView({
    job,
    project,
    tasks,
    projectUUID,
    jobUUID,
    vendors,
    units,
    PMs,
    FoldersArray,
    // postFunc,
}: JobViewProps) {
    //Hooks
    const [showTaskCreationForm, setShowTaskCreationForm] = useState<boolean>(false);

    const { opened, open, close, deleteItemFromItemView } = useDeleteConfirmModalWithRouteHook();

    // Functions

    function CreateTask() {
        setShowTaskCreationForm(true);
    }

    return (
        <>
            <DeleteConfirmModal
                opened={opened}
                close={close}
                actionFunc={async () =>
                    await deleteItemFromItemView(job.uuid, "jobs", `/dashboard/projects/${projectUUID}`)
                }
            />

            {showTaskCreationForm ? (
                <TaskCreation
                    setShowTaskCreationForm={setShowTaskCreationForm}
                    PMsArray={PMs}
                    UnitsArray={units}
                    vendorsArray={vendors}
                    job={job}
                    project={project}
                />
            ) : (
                <>
                    <section className="mb-6 flex items-center gap-x-4 w-auto rounded-md border-b border-gray-900/10">
                        <GoBackButton />
                        <ProjectBreadcrumbs
                            projectName={project.name}
                            projectURL={project.uuid}
                            projectId={project.id}
                            jobName={job.name}
                            jobURL={job.uuid}
                            indexLevel={2}
                        />
                    </section>

                    <section className="Top-Menu flex justify-between border-b border-gray-900/10 pb-3 pt-2">
                        <div>
                            <h1 className="text-2xl font-bold">Job Details</h1>
                        </div>
                        <div>
                            {/* ------------BUTTONS------------ */}

                            <div className="flex justify-end space-x-4 ">
                                {/* Add Task Button */}

                                <button
                                    onClick={() => CreateTask()}
                                    type="button"
                                    className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                                >
                                    Add Task
                                </button>

                                {/* Edit Job Button */}

                                <Link
                                    href={`${job.uuid}/edit`}
                                    className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                                >
                                    Edit Job
                                </Link>

                                {/* Delete Button */}

                                <button
                                    onClick={open}
                                    type="button"
                                    className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                                >
                                    Delete Job
                                </button>
                            </div>

                            {/* ------------BUTTONS------------ */}
                        </div>
                    </section>
                    {/* Summary */}
                    <section className="Quote-Details mt-3 mb-6 bg-white px-4 py-3">
                        <div className="flex items-center gap-2 px-2 py-2">
                            <h3 className="w-1/4">Job Name</h3>
                            <span className="text-xl font-medium">{job.name}</span>
                        </div>

                        {/* <div className="flex items-center gap-2 px-2 py-2">
                <span className="w-1/4">Client Name</span>
                <a href="">Client Link</a>
            </div> */}

                        {/* <div className="flex items-center gap-2 px-2 py-2">
                    <span className="w-1/4">Status</span>
                    <p>{job.}</p>
                </div> */}

                        <div className="flex items-center gap-2 px-2 py-2">
                            <span className="w-1/4">Project Name</span>
                            <p>{project.name}</p>
                        </div>

                        <div>
                            {/* <TreeC /> */}
                            {/* <RootFolderTree rootFolderUUID={project.attachments.uuid} /> */}
                        </div>

                        {/* <div className="flex items-center gap-2 px-2 py-2">
                    <span className="w-1/4">Client Name</span>
                    <p>{""}</p>
                </div>
                <div className="flex items-center gap-2 px-2 py-2">
                    <span className="w-1/4">Primary PM</span>
                    <p>{""}</p>
                </div>
                <div className="flex items-center gap-2 px-2 py-2">
                    <span className="w-1/4">Secondary PM</span>
                    <p>{""}</p>
                </div> */}
                    </section>

                    <div className="mb-5 mt-5 panel max-w-screen">
                        <JobViewTabs job={job} FoldersArray={FoldersArray} project={project} />
                    </div>

                    <section className="mb-5 mt-5 panel max-w-screen">
                        <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                            <h3 className="text-lg font-extrabold dark:text-white-light">Job Tasks List: </h3>
                            <div className="ltr:ml-auto rtl:mr-auto"></div>
                            {/* <Link
                        href={newResourceLink}
                        className="flex cursor-pointer items-center justify-center rounded-xl bg-purple-500 p-2 font-semibold text-white hover:bg-purple-700"
                    >
                        <IconAdd />
                        <span className="mx-1">{newResourceLabel}</span>
                    </Link> */}
                        </div>

                        <TasksTable
                            tableTitle={""}
                            UUID={""}
                            openModal={false}
                            setOpenModal={function (value: SetStateAction<boolean>): void {
                                throw new Error("Function not implemented.");
                            }}
                            records={tasks}
                            projectUUID={projectUUID}
                            jobData={job}
                            handleModalDeleteButttonFunc={function (): Promise<void> {
                                throw new Error("Function not implemented.");
                            }}
                            jobUUID={jobUUID}
                        />
                    </section>
                </>
            )}
        </>
    );
}
