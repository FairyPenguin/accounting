import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import CountriesFetcher from "@/modules/dashboard/projects/Services/FetchAllCountries";
import CurrenciesFetcher from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import LanguagesFetcher from "@/modules/dashboard/projects/Services/FetchAllLangs";
import projectsFetcher from "@/modules/dashboard/projects/Services/FetchAllProjects";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import TaskEditing from "./TaskEditing";
import vendorsFetcher from "@/modules/dashboard/projects/Services/FetchAllVendors";
import getSingleTaskByUUID from "@/modules/dashboard/projects/Services/FetchSingleTaskByUUID";
import getSingleJobByUUID from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";

async function page({ params }: { params: { taskUUID: string; jobUUID: string; projectUUID: string } }) {
    const taskUUID = params.taskUUID;
    const jobUUID = params.jobUUID;
    const projectUUID = params.projectUUID;
    // Form DropDown Inputs Props Data
    //--------------------//
    const vendorsArray = await vendorsFetcher();
    const clientsArray = await clientsFetcher();
    const UnitsArray = await unitsFetcher();
    const LanguagesArray = await LanguagesFetcher();
    const SpecializationsArray = await SpecializationsFetcher();
    const CurrenciesArray = await CurrenciesFetcher();
    const ClientServicesArray = await ClientServicesFetcher();
    const CountriesArray = await CountriesFetcher();
    const projectsArray = await projectsFetcher();
    const taskData = await getSingleTaskByUUID(taskUUID);
    const jobData = await getSingleJobByUUID(jobUUID);
    //--------------------//

    if (!taskData) {
        return "Error no task";
    }

    if (!jobData.JobByUUID) {
        return "Error no task";
    }

    //--------------------//

    return (
        <>
            <TaskEditing
                clientsArray={clientsArray}
                vendorsArray={vendorsArray}
                UnitsArray={UnitsArray}
                LanguagesArray={LanguagesArray}
                SpecializationsArray={SpecializationsArray}
                CurrenciesArray={CurrenciesArray}
                ClientServicesArray={ClientServicesArray}
                CountriesArray={CountriesArray}
                taskUUID={taskUUID}
                projectUUID={projectUUID}
                task={taskData}
                job={jobData.JobByUUID}
            />
        </>
    );
}

export default page;
