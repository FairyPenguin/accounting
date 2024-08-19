import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import ProjectCreation from "./ProjectCreation";
import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import LanguagesFetcher from "@/modules/dashboard/projects/Services/FetchAllLangs";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import CurrenciesFetcher from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import CountriesFetcher from "@/modules/dashboard/projects/Services/FetchAllCountries";
import accountsFetcher from "@/modules/dashboard/projects/Services/FetchAllAccounts";

async function NewProjectPage() {
    // Form DropDown Inputs Props Data
    //--------------------//
    const clientsArray = await clientsFetcher();
    const UnitsArray = await unitsFetcher();
    const LanguagesArray = await LanguagesFetcher();
    const SpecializationsArray = await SpecializationsFetcher();
    const CurrenciesArray = await CurrenciesFetcher();
    const ClientServicesArray = await ClientServicesFetcher();
    const CountriesArray = await CountriesFetcher();
    const AccountsArray = await accountsFetcher();

    //--------------------//

    return (
        <ProjectCreation
            clientsArray={clientsArray}
            UnitsArray={UnitsArray}
            LanguagesArray={LanguagesArray}
            SpecializationsArray={SpecializationsArray}
            CurrenciesArray={CurrenciesArray}
            ClientServicesArray={ClientServicesArray}
            CountriesArray={CountriesArray}
            AccountsArray={AccountsArray}
        />
    );
}

export default NewProjectPage;
