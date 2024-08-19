"use client";

import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import TaskEditingForm from "./TaskEditingForm";
import { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import UpdateSignleTaskByUUID from "@/modules/dashboard/projects/Services/UpdateSingleTaskByUUID";
import { TaskByUUID } from "@/modules/dashboard/projects/Services/FetchSingleTaskByUUID";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";

interface PropsType {
    clientsArray: Client[];
    vendorsArray: Vendor[];
    UnitsArray: Unit[];
    LanguagesArray: Language[];
    SpecializationsArray: Speciality[];
    CurrenciesArray: Currency[];
    ClientServicesArray: ClientService[];
    CountriesArray: Country[];
    projectsArray?: Project[];
    setShowJobCreationForm?: React.Dispatch<React.SetStateAction<boolean>>;
    taskUUID: string;
    projectUUID: string;
    task: TaskByUUID;
    job: JobByUUID;
}

function TaskEditing({
    clientsArray,
    vendorsArray,
    UnitsArray,
    LanguagesArray,
    SpecializationsArray,
    CurrenciesArray,
    ClientServicesArray,
    CountriesArray,
    projectsArray,
    taskUUID,
    projectUUID,
    task,
    job,
    // setShowJobCreationForm,
}: PropsType) {
    return (
        <>
            <TaskEditingForm
                clients={clientsArray}
                units={UnitsArray}
                languages={LanguagesArray}
                specializations={SpecializationsArray}
                currencies={CurrenciesArray}
                clientServices={ClientServicesArray}
                countries={CountriesArray}
                projectId={0}
                projectName={""}
                pathNameIncludsProjectUUID={""}
                updateTaskFunc={async (data, UUID) =>
                    await UpdateSignleTaskByUUID(
                        data,
                        UUID,
                        `/dashboard/projects/${projectUUID}/jobs/${job.uuid}/tasks/${task.uuid}`,
                    )
                }
                vendors={vendorsArray}
                taskUUID={taskUUID}
                projectUUID={projectUUID}
                task={task}
                job={job}
            />
        </>
    );
}

export default TaskEditing;
