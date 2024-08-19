import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import JobEditing from "./JobEditing";
import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import CountriesFetcher from "@/modules/dashboard/projects/Services/FetchAllCountries";
import CurrenciesFetcher from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import LanguagesFetcher from "@/modules/dashboard/projects/Services/FetchAllLangs";
import projectsFetcher from "@/modules/dashboard/projects/Services/FetchAllProjects";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import getSingleProjectByUUID from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import getSingleJobByUUID from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";

async function page({ params }: { params: { jobUUID: string; projectUUID: string } }) {
    //
    const projectUUID = params.projectUUID;
    const jobUUID = params.jobUUID;
    // Form DropDown Inputs Props Data
    //--------------------//
    const clientsArray = await clientsFetcher();
    const UnitsArray = await unitsFetcher();
    const LanguagesArray = await LanguagesFetcher();
    const SpecializationsArray = await SpecializationsFetcher();
    const CurrenciesArray = await CurrenciesFetcher();
    const ClientServicesArray = await ClientServicesFetcher();
    const CountriesArray = await CountriesFetcher();
    const projectsArray = await projectsFetcher();

    // JOB && Projects Data
    const project = (await getSingleProjectByUUID(projectUUID)).data.data;

    const job = await getSingleJobByUUID(jobUUID);

    //--------------------// Guard Clause checks

    // if (!project) {

    // }

    if (!job.JobByUUID) {
        return <p>Error: {job.JobByUUID ?? "Failed to fetch job data"}</p>;
    }

    //--------------------//

    return (
        <>
            <JobEditing
                clientsArray={clientsArray}
                UnitsArray={UnitsArray}
                LanguagesArray={LanguagesArray}
                SpecializationsArray={SpecializationsArray}
                CurrenciesArray={CurrenciesArray}
                ClientServicesArray={ClientServicesArray}
                CountriesArray={CountriesArray}
                project={project ? project : undefined}
                job={job.JobByUUID}
            />
            {/*  */}

            {/* {job.JobByUUID ? (
                <JobEditing
                    clientsArray={clientsArray}
                    UnitsArray={UnitsArray}
                    LanguagesArray={LanguagesArray}
                    SpecializationsArray={SpecializationsArray}
                    CurrenciesArray={CurrenciesArray}
                    ClientServicesArray={ClientServicesArray}
                    CountriesArray={CountriesArray}
                    project={project ? project : undefined}
                    job={job.JobByUUID}
                />
            ) : (
                <p>Error: Failed to fetch job data...{job.message}</p>
            )} */}
        </>
    );
}

export default page;
