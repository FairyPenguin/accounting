import accountsFetcher from "@/modules/dashboard/projects/Services/FetchAllAccounts";
import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import clientsFetcher from "@/modules/dashboard/projects/Services/FetchAllClients";
import ClientServicesFetcher from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import LanguagesFetcher from "@/modules/dashboard/projects/Services/FetchAllLangs";
import SpecializationsFetcher from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import QuoteCreation from "./QuoteCreation";
import getAllPMs from "@/modules/dashboard/projects/Services/FetchAllPMs";

async function page() {
    // Form DropDown Inputs Props Data
    //--------------------//
    const clientsArray = await clientsFetcher();
    const UnitsArray = await unitsFetcher();
    const LanguagesArray = await LanguagesFetcher();
    const SpecializationsArray = await SpecializationsFetcher();
    const ClientServicesArray = await ClientServicesFetcher();
    const AccountsArray = await accountsFetcher();
    const PMsArray = await getAllPMs();

    //--------------------//

    return (
        <>
            <QuoteCreation
                clientsArray={clientsArray}
                unitsArray={UnitsArray}
                languagesArray={LanguagesArray}
                clientServicesArray={ClientServicesArray}
                accountsArray={AccountsArray}
                PMsArray={PMsArray}
                SpecializationsArray={SpecializationsArray}
            />
        </>
    );
}

export default page;
