import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import CountriesFetcher from "@/modules/dashboard/projects/Services/FetchAllCountries";
import CurrenciesFetcher from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import LanguagesFetcher from "@/modules/dashboard/projects/Services/FetchAllLangs";
import servicesFetcher from "@/modules/dashboard/projects/Services/FetchAllServices";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import JobCreation from "./JobCreation";
import projectsFetcher from "@/modules/dashboard/projects/Services/FetchAllProjects";

export default async function NewJob() {
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

    //--------------------//
    return (
        // <JobCreation
        //     clientsArray={clientsArray}
        //     UnitsArray={UnitsArray}
        //     LanguagesArray={LanguagesArray}
        //     SpecializationsArray={SpecializationsArray}
        //     CurrenciesArray={CurrenciesArray}
        //     ClientServicesArray={ClientServicesArray}
        //     CountriesArray={CountriesArray} project={}        />
        <h1>New-Job</h1>
    );
}
