import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import CountriesFetcher from "@/modules/dashboard/projects/Services/FetchAllCountries";
import CurrenciesFetcher from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import LanguagesFetcher from "@/modules/dashboard/projects/Services/FetchAllLangs";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import projectsFetcher from "@/modules/dashboard/projects/Services/FetchAllProjects";
import ProjectBreadcrumbs from "@/modules/dashboard/projects/Components/ProjectBreadcrumbs";
import getProjectJobsByUUID from "@/modules/dashboard/projects/Services/FetchProjectJobs";
import getSingleJobByUUID from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import JobView from "./JobView";
import { fetchJobTasks } from "@/modules/dashboard/projects/Services/FetchJobTasks";
import getSingleProjectByUUID from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import getAllPMs from "@/modules/dashboard/projects/Services/FetchAllPMs";
import vendorsFetcher from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { ChildFolder, fetchFolderTreeByUUID } from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";

export default async function page({ params }: { params: { jobUUID: string; projectUUID: string } }) {
    //
    const jobUUID = params.jobUUID;
    const projectUUID = params.projectUUID;
    //
    const vendorsArray = await vendorsFetcher();
    const PMsArray = await getAllPMs();
    const clientsArray = await clientsFetcher();
    const UnitsArray = await unitsFetcher();
    const LanguagesArray = await LanguagesFetcher();
    const SpecializationsArray = await SpecializationsFetcher();
    const CurrenciesArray = await CurrenciesFetcher();
    const ClientServicesArray = await ClientServicesFetcher();
    const CountriesArray = await CountriesFetcher();
    const projectsArray = await projectsFetcher();
    const tasksArray = await fetchJobTasks(jobUUID);
    console.log(tasksArray);
    const response = await getSingleProjectByUUID(projectUUID);
    const projectData = response.data.data;
    const job = await getSingleJobByUUID(jobUUID);

    if (!projectData) {
        return "Failed to fetch project";
    }

    let FoldersArray: ChildFolder[] = [];

    if (projectData.attachments && projectData.attachments.uuid) {
        // return "Failed to fetch project";
        const folders = await fetchFolderTreeByUUID(`${projectData.attachments.uuid}`);

        if (folders.data && folders.data.children) {
            FoldersArray = folders.data.children;
        }
    }

    // if (!folders.data) {
    //     return "Failed to fetch project";
    // }

    // console.log(folders.data.childs);

    //--------------------// Guard Clause checks

    // if (!project) {

    // }

    if (!job.JobByUUID) {
        return <p>Error: {job.JobByUUID ?? "Failed to fetch job data"}</p>;
    }

    const mainProjectFolderArray = [];
    mainProjectFolderArray.push(projectData);
    //--------------------//

    return (
        <>
            {projectData ? (
                <JobView
                    job={job.JobByUUID}
                    project={projectData}
                    tasks={tasksArray}
                    projectUUID={projectUUID}
                    jobUUID={jobUUID}
                    vendors={vendorsArray}
                    units={UnitsArray}
                    PMs={PMsArray}
                    // FoldersArray={FoldersArray ? FoldersArray : []}
                    FoldersArray={mainProjectFolderArray}
                />
            ) : (
                <p className="font-semibold text-red-800">Failed to fetch job data...</p>
            )}
        </>
    );
}
