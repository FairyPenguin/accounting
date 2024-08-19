import getSingleQuoteByUUID from "@/modules/dashboard/quotes/Services/FetchSingleQuoteByUUID";
import QuoteView from "./QuoteView";

async function page({ params }: { params: { quoteUUID: string } }) {
    // Fetch Quote Data
    const quoteData = await getSingleQuoteByUUID(params.quoteUUID);

    return (
        <div>
            {/* <h1>You are in the path of {params.quoteUUID} Quote</h1> */}
            {quoteData ? (
                <QuoteView
                    quote={quoteData}
                    clientsArray={[]}
                    UnitsArray={[]}
                    LanguagesArray={[]}
                    SpecializationsArray={[]}
                    CurrenciesArray={[]}
                    ClientServicesArray={[]}
                    CountriesArray={[]}
                />
            ) : (
                <p className="text-red-800">error...</p>
            )}
        </div>
    );
}

export default page;
