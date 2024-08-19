import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import CountriesFetcher from "@/modules/dashboard/projects/Services/FetchAllCountries";
import CurrenciesFetcher from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import LanguagesFetcher from "@/modules/dashboard/projects/Services/FetchAllLangs";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import getSingleProjectByUUID, { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import ProjectView from "./ProjectView";
import projectsFetcher from "@/modules/dashboard/projects/Services/FetchAllProjects";
import ProjectBreadcrumbs from "@/modules/dashboard/projects/Components/ProjectBreadcrumbs";
import getProjectJobsByUUID from "@/modules/dashboard/projects/Services/FetchProjectJobs";

export default async function page({ params }: { params: { projectUUID: string } }) {
    // Form DropDown Inputs Props Data
    //
    const clientsArray = await clientsFetcher();
    const UnitsArray = await unitsFetcher();
    const LanguagesArray = await LanguagesFetcher();
    const SpecializationsArray = await SpecializationsFetcher();
    const CurrenciesArray = await CurrenciesFetcher();
    const ClientServicesArray = await ClientServicesFetcher();
    const CountriesArray = await CountriesFetcher();
    const projectsArray = await projectsFetcher();
    const projectJobsArray = (await getProjectJobsByUUID(params.projectUUID)).jobs;

    const UUID = params.projectUUID;

    const response = await getSingleProjectByUUID(UUID);

    const projectData = response.data.data;

    // if (projectData !== undefined) {
    //     console.log("Project data:", projectData);
    // } else {
    //     console.error("Failed to retrieve project data:", response.data.message);
    // }

    return (
        <>
            {/* <ProjectBreadcrumbs
                projectName={projectData ? projectData.name : ""}
                projectURL={
                    projectData
                        ? `/dashboard/projects/${projectData.uuid}?projectId=${projectData.id}&projectName=${projectData.name}`
                        : ""
                }
            /> */}
            {/* <h1>Single Project Page</h1>
            <h2>{params.projectUUID}</h2> */}
            {projectData ? (
                <ProjectView
                    clientsArray={clientsArray}
                    UnitsArray={UnitsArray}
                    LanguagesArray={LanguagesArray}
                    SpecializationsArray={SpecializationsArray}
                    CurrenciesArray={CurrenciesArray}
                    ClientServicesArray={ClientServicesArray}
                    CountriesArray={CountriesArray}
                    project={projectData}
                    projectJobs={projectJobsArray}
                />
            ) : (
                <p className="text-red-800">error...</p>
            )}
        </>
    );
}
