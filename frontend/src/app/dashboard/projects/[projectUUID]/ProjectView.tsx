"use client";
import { SetStateAction, useState, useTransition } from "react";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import { useRouter } from "next/navigation";
import JobCreation from "./jobs/new-job/JobCreation";
import Link from "next/link";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import useDeleteConfirmModalWithRouteHook from "../../../../modules/dashboard/projects/Hooks/useDeleteConfirmModalWithRouteHook";
import { JobInProjectJobsList } from "@/modules/dashboard/projects/Services/FetchProjectJobs";
import JobsTable from "./jobs/JobsTableComponent/JobsTable";
import ProjectBreadcrumbs from "@/modules/dashboard/projects/Components/ProjectBreadcrumbs";
import GoBackButton from "../GoBackButton";
import ProjectViewTabs from "@/modules/dashboard/projects/ProjectViewTabs/ProjectViewTabs";

interface Props {
    project: ProjectByUUID;
    clientsArray: Client[];
    UnitsArray: Unit[];
    LanguagesArray: Language[];
    SpecializationsArray: Speciality[];
    CurrenciesArray: Currency[];
    ClientServicesArray: ClientService[];
    CountriesArray: Country[];
    projectsArray?: Project[];
    projectJobs: JobInProjectJobsList[];
}

function ProjectView({
    project,
    projectsArray,
    clientsArray,
    UnitsArray,
    LanguagesArray,
    SpecializationsArray,
    CurrenciesArray,
    ClientServicesArray,
    CountriesArray,
    projectJobs,
}: Props) {
    const [showJobCreationForm, setShowJobCreationForm] = useState<boolean>(false);
    // const [opened, { close, open }] = useDisclosure(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const { opened, open, close, deleteItemFromItemView } = useDeleteConfirmModalWithRouteHook();

    // const {} = useMutation({
    //     mutationFn:
    // })

    // console.log(projectJobs);

    function CreateJob() {
        setShowJobCreationForm(true);
        router.replace(
            `/dashboard/projects/${project.uuid}?projectId=${project.id}&projectName=${project.name}/new-job`,
        );
    }

    return (
        <>
            <DeleteConfirmModal
                opened={opened}
                close={close}
                actionFunc={async () => await deleteItemFromItemView(project.uuid, "projects", "/dashboard/projects")}
            />

            {showJobCreationForm ? (
                <JobCreation
                    clientsArray={clientsArray}
                    UnitsArray={UnitsArray}
                    LanguagesArray={LanguagesArray}
                    SpecializationsArray={SpecializationsArray}
                    CurrenciesArray={CurrenciesArray}
                    ClientServicesArray={ClientServicesArray}
                    CountriesArray={CountriesArray}
                    // projectsArray={projectsArray}
                    setShowJobCreationForm={setShowJobCreationForm}
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
                            indexLevel={1}
                        />
                    </section>

                    <div>
                        <section className="Top-Menu flex justify-between border-b border-gray-900/10 pb-3 pt-2">
                            <div>
                                <h1 className="text-2xl font-bold">Project Details</h1>
                            </div>
                            <div>
                                {/* ------------BUTTONS------------ */}

                                <div className="flex justify-end space-x-4 ">
                                    {/* Add Jobs Button */}

                                    <button
                                        onClick={() => CreateJob()}
                                        type="button"
                                        className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                                    >
                                        Add Jobs
                                    </button>

                                    {/* Edit project Button */}

                                    <Link
                                        href={`${project.uuid}/edit`}
                                        className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                                    >
                                        Edit Project
                                    </Link>

                                    {/* Delete Button */}

                                    <button
                                        onClick={open}
                                        type="button"
                                        className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                                    >
                                        Delete Project
                                    </button>
                                </div>

                                {/* ------------BUTTONS------------ */}
                            </div>
                        </section>

                        {/* Summary */}
                        <section className="mt-3 bg-white px-4 py-3">
                            <div className="flex items-center gap-2 px-2 py-2">
                                <h3 className="w-1/4">Project Name</h3>
                                <span className="text-xl font-medium">{project.name}</span>
                            </div>

                            <div className="flex items-center gap-2 px-2 py-2">
                                <span className="w-1/4">Client Name</span>
                                <a href="">Client Link</a>
                            </div>

                            <div className="flex items-center gap-2 px-2 py-2">
                                <span className="w-1/4">Primary PM</span>
                                <p>PM</p>
                            </div>

                            <div className="flex items-center gap-2 px-2 py-2">
                                <span className="w-1/4">Secondary PM</span>
                                <p>Secondary PM</p>
                            </div>
                        </section>

                        {/* Tree */}
                        {/* Tree */}

                        {/* Jobs ____________ Table */}
                        <div className="mb-5 mt-5 panel max-w-screen">
                            <ProjectViewTabs project={project} />
                        </div>

                        <section className="mb-5 mt-5 panel max-w-screen">
                            <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                                <h3 className="text-lg font-extrabold dark:text-white-light">Project Jobs List: </h3>
                                <div className="ltr:ml-auto rtl:mr-auto"></div>
                                {/* <Link
                                href={newResourceLink}
                                className="flex cursor-pointer items-center justify-center rounded-xl bg-purple-500 p-2 font-semibold text-white hover:bg-purple-700"
                            >
                                <IconAdd />
                                <span className="mx-1">{newResourceLabel}</span>
                            </Link> */}
                            </div>

                            <JobsTable
                                tableTitle={"Project Jobs List"}
                                UUID={""}
                                openModal={false}
                                setOpenModal={function (value: SetStateAction<boolean>): void {
                                    throw new Error("Function not implemented.");
                                }}
                                handleModalDeleteButttonFunc={function (): Promise<void> {
                                    throw new Error("Function not implemented.");
                                }}
                                records={projectJobs}
                                projectData={project}
                            />
                        </section>
                        {/* Jobs ____________ Table */}

                        {/* Jobs Section */}

                        {/* <section>
                        <p>{project.id}</p>
                        <h1>Jobs List</h1>
                        {projectJobs.map((job) => {
                            return (
                                <div key={job.id}>
                                    <a href={`${project.uuid}/jobs/${job.uuid}`}>
                                        <h2>{job.name}</h2>
                                    </a>
                                    <br />
                                    <h1>{job.id}</h1>
                                </div>
                            );
                        })}
                    </section> */}
                        {/* Jobs Section */}
                    </div>
                </>
            )}
        </>
    );
}

export default ProjectView;
