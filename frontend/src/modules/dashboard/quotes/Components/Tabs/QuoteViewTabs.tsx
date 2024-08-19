import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import classes from "./Tabs.module.css";
import { QuoteByUUID } from "../../Types/QuoteType";
import DateFormatter from "@/shared/helpers/DateFormatter";
import QuoteStackedList from "../QuoteStackedList";
import QuoteStackedListItem from "../QuoteStackedListItem";

export default function QuoteViewTabs({ quote }: { quote: QuoteByUUID }) {
    // truncate Function or CSS as a btter solution
    // 9 words 32 characters
    const pmFullName = quote.primaryPM.firstName + " " + quote.primaryPM.lastName;

    return (
        <Tabs variant="outline" defaultValue="Basic Data" classNames={classes}>
            <Tabs.List grow>
                {/* Basic Data */}
                <Tabs.Tab value="Basic Data">Details</Tabs.Tab>
                {/* People */}
                <Tabs.Tab value="People">Attachments</Tabs.Tab>
                {/* History */}
                <Tabs.Tab value="History">Availability Requests</Tabs.Tab>
                {/* End of tabs <-- */}
            </Tabs.List>

            {/* Tabs Data */}
            <Tabs.Panel value="Basic Data">
                <section className="max-w-screen container p-5">
                    <h2 className="text-2xl font-bold">Basic Data</h2>
                    <QuoteStackedList>
                        <QuoteStackedListItem identifierKey={"Client"} value={quote.client.name} />
                        {/* <QuoteStackedListItem identifierKey={"Field"} value={quote} /> */}
                        <QuoteStackedListItem identifierKey={"Client Service"} value={quote.service.name} />
                        <QuoteStackedListItem identifierKey={"Source Language"} value={quote.sourceLanguage.name} />
                        <QuoteStackedListItem identifierKey={"Target Language"} value={quote.targetLanguage.name} />
                        <QuoteStackedListItem identifierKey={"Quantity"} value={quote.workQuantity} />
                        {/* <QuoteStackedListItem identifierKey={"Client"} value={quote} /> */}
                        <QuoteStackedListItem identifierKey={"Start Date"} value={DateFormatter(quote.startDate)} />
                        <QuoteStackedListItem identifierKey={"End Date"} value={DateFormatter(quote.endDate)} />
                        <QuoteStackedListItem
                            identifierKey={"Client Deadline"}
                            value={DateFormatter(quote.quotationDate)}
                        />
                        <QuoteStackedListItem identifierKey={"Job Owner"} value={pmFullName} />
                    </QuoteStackedList>
                    <div className="Grid-Container grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
                </section>
                <section className="Instructions mt-6 mb-6  bg-white px-4 py-3">
                    <h2 className="text-2xl font-bold">Quote Instructions</h2>
                    <div>
                        <p className="p-4 mt-8 border border-slate-300 text-lg">{quote.jobInstructions}</p>
                    </div>
                </section>
            </Tabs.Panel>
            <Tabs.Panel value="People">
                <section className="max-w-screen container p-5">
                    <h2 className="text-2xl font-bold">Attachments</h2>
                </section>
            </Tabs.Panel>
            <Tabs.Panel value="History">
                <section className="max-w-screen container p-5">
                    <h2 className="text-2xl font-bold">Avilable Requests</h2>
                </section>
            </Tabs.Panel>
        </Tabs>
    );
}
