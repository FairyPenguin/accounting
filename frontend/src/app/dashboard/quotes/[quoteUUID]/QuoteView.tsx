"use client";

import { Quote, QuoteByUUID } from "@/modules/dashboard/quotes/Types/QuoteType";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import Link from "next/link";
import ConvertQuoteToProject from "@/modules/dashboard/quotes/Services/ConvertQuoteToProject";
import QuoteViewTabs from "@/modules/dashboard/quotes/Components/Tabs/QuoteViewTabs";
import QuoteStackedList from "@/modules/dashboard/quotes/Components/QuoteStackedList";
import QuoteStackedListItem from "@/modules/dashboard/quotes/Components/QuoteStackedListItem";
import DateFormatter from "@/shared/helpers/DateFormatter";

interface Props {
    quote: QuoteByUUID;
    clientsArray: Client[];
    UnitsArray: Unit[];
    LanguagesArray: Language[];
    SpecializationsArray: Speciality[];
    CurrenciesArray: Currency[];
    ClientServicesArray: ClientService[];
    CountriesArray: Country[];
}

function QuoteView({ quote }: Props) {
    // TIME in date ???!
    const pmFullName = quote.primaryPM.firstName + " " + quote.primaryPM.lastName;

    return (
        <>
            {/* <div>
                QuoteView
                <h1>{quote.name}</h1>
                <h1>{quote.uuid}</h1>
                <h1>{quote.status}</h1>
            </div> */}
            <div>
                <section className="Top-Menu flex justify-between border-b border-gray-900/10 pb-3 pt-2">
                    <div>
                        <h1 className="text-2xl font-bold">Quote Details</h1>
                    </div>
                    <div>
                        {/* ------------BUTTONS------------ */}

                        <div className="flex justify-end space-x-4 ">
                            {/* Add Jobs Button */}

                            <button
                                onClick={async () => {
                                    console.log("Convert Btn Clicked");
                                    await ConvertQuoteToProject(quote.uuid, { uuid: quote.uuid });
                                }}
                                type="button"
                                className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                            >
                                Convert to Project
                            </button>

                            {/* Edit project Button */}

                            {/* <Link
                                href={`${quote.uuid}/edit`}
                                className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                            >
                                Edit Project
                            </Link> */}

                            {/* Delete Button */}

                            <button
                                // onClick={open}
                                type="button"
                                className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                            >
                                Cancel Quote
                            </button>
                        </div>

                        {/* ------------BUTTONS------------ */}
                    </div>
                </section>

                {/* Summary */}
                <section className="Quote-Details mt-3 mb-6 bg-white px-4 py-3">
                    <div className="flex items-center gap-2 px-2 py-2">
                        <h3 className="w-1/4">Quote Name</h3>
                        <span className="text-xl font-medium">{quote.name}</span>
                    </div>

                    {/* <div className="flex items-center gap-2 px-2 py-2">
                        <span className="w-1/4">Client Name</span>
                        <a href="">Client Link</a>
                    </div> */}

                    <div className="flex items-center gap-2 px-2 py-2">
                        <span className="w-1/4">Created By</span>
                        <p>{pmFullName}</p>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-2">
                        <span className="w-1/4">Quote Status</span>
                        <p>{quote.status}</p>
                    </div>
                </section>

                <QuoteViewTabs quote={quote} />
            </div>
        </>
    );
}

export default QuoteView;
