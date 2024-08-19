"use client";

import JobEditingForm from "./JobEditingForm";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import UpdateSignleJobByUUID from "@/modules/dashboard/projects/Services/UpdateSingleJobByUUID";

interface PropsType {
    project: ProjectByUUID | undefined;
    job: JobByUUID;
    clientsArray: Client[];
    UnitsArray: Unit[];
    LanguagesArray: Language[];
    SpecializationsArray: Speciality[];
    CurrenciesArray: Currency[];
    ClientServicesArray: ClientService[];
    CountriesArray: Country[];
    projectsArray?: Project[];
    setShowJobCreationForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

function JobEditing({
    clientsArray,
    UnitsArray,
    LanguagesArray,
    SpecializationsArray,
    CurrenciesArray,
    ClientServicesArray,
    CountriesArray,
    projectsArray,
    project,
    job,
    // setShowJobCreationForm,
}: PropsType) {
    return (
        <>
            <JobEditingForm
                project={project ? project : undefined}
                job={job}
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
                updateJobFunc={async (data, UUID) =>
                    await UpdateSignleJobByUUID(data, UUID, `/dashboard/projects/${project?.uuid}/jobs/${job.uuid}`)
                }
            />
        </>
    );
}

export default JobEditing;
