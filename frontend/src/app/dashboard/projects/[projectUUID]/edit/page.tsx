import getSingleProjectByUUID from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import ProjectEditing from "./ProjectEditing";
import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import CountriesFetcher from "@/modules/dashboard/projects/Services/FetchAllCountries";
import CurrenciesFetcher from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import accountsFetcher from "@/modules/dashboard/projects/Services/FetchAllAccounts";

export default async function EditProjectPage({ params }: { params: { projectUUID: string } }) {
    const projectData = await getSingleProjectByUUID(params.projectUUID);
    const project = projectData.data.data;

    const clientsArray = await clientsFetcher();
    const UnitsArray = await unitsFetcher();
    const SpecializationsArray = await SpecializationsFetcher();
    const CurrenciesArray = await CurrenciesFetcher();
    const ClientServicesArray = await ClientServicesFetcher();
    const CountriesArray = await CountriesFetcher();
    const accountsArray = await accountsFetcher();
    return (
        <>
            {project ? (
                <ProjectEditing
                    clientsArray={clientsArray}
                    UnitsArray={UnitsArray}
                    SpecializationsArray={SpecializationsArray}
                    CurrenciesArray={CurrenciesArray}
                    ClientServicesArray={ClientServicesArray}
                    CountriesArray={CountriesArray}
                    AccountsArray={accountsArray}
                    project={project}
                />
            ) : null}
        </>
    );
}
