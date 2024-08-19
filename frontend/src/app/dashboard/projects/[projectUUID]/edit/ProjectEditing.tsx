"use client";
import ProjectEditingForm from "./ProjectEditingForm";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import { Account } from "@/modules/dashboard/projects/Services/FetchAllAccounts";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import UpdateSignleProjectByUUID, {
    taskFormData,
} from "@/modules/dashboard/projects/Services/UpdateSingleProjectByUUID";
/**
 *
 *
 *
 */

interface PropsType {
    clientsArray: Client[];
    UnitsArray: Unit[];
    SpecializationsArray: Speciality[];
    CurrenciesArray: Currency[];
    ClientServicesArray: ClientService[];
    CountriesArray: Country[];
    AccountsArray: Account[];
    project: ProjectByUUID;
}

function ProjectEditing({
    clientsArray,
    UnitsArray,
    SpecializationsArray,
    CurrenciesArray,
    ClientServicesArray,
    CountriesArray,
    AccountsArray,
    project,
}: PropsType) {
    /**
     *
     * @param data
     * @param UUID
     */
    async function updateProject(data: taskFormData, UUID: string) {
        // Pass data to PostNewProjectForm() func
        try {
            const putReqResponse = await UpdateSignleProjectByUUID(data, UUID);
        } catch (error) {
            console.error("Error:", error); // Handle error
        }
    }

    return (
        <>
            <ProjectEditingForm
                project={project}
                clients={clientsArray}
                units={UnitsArray}
                specializations={SpecializationsArray}
                currencies={CurrenciesArray}
                clientServices={ClientServicesArray}
                countries={CountriesArray}
                accounts={AccountsArray}
                updateProjectFunc={async (data, UUID) => await UpdateSignleProjectByUUID(data, UUID)}
                // updateFunc={updateProject}
            />
        </>
    );
}

export default ProjectEditing;
