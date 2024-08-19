import { Tabs } from "@mantine/core";
import classes from "./Tabs.module.css";
import { ProjectByUUID } from "../Services/FetchSingleProjectByUUID";
import DateFormatter from "@/shared/helpers/DateFormatter";
import QuoteStackedList from "../../quotes/Components/QuoteStackedList";
import QuoteStackedListItem from "../../quotes/Components/QuoteStackedListItem";

export default function ProjectViewTabs({ project }: { project: ProjectByUUID }) {
    const pmFullName = project.primaryPM.firstName + " " + project.primaryPM.lastName;

    return (
        <Tabs variant="outline" defaultValue="Basic Data" classNames={classes}>
            <Tabs.List grow>
                {/* Basic Data */}
                <Tabs.Tab value="Basic Data">Basic Data</Tabs.Tab>
                {/* People */}
                <Tabs.Tab value="People">People</Tabs.Tab>
                {/* History */}
                <Tabs.Tab value="History">History</Tabs.Tab>
                {/* End of tabs <-- */}
            </Tabs.List>

            {/* Tabs Data */}
            <Tabs.Panel value="Basic Data">
                <section className="max-w-screen container p-5">
                    {/* <h2 className="text-2xl font-bold">Basic Data</h2> */}
                    <QuoteStackedList>
                        <QuoteStackedListItem identifierKey={"Project Name"} value={project.name} />

                        <QuoteStackedListItem identifierKey={"Client Name"} value={project.client.name} />

                        <QuoteStackedListItem identifierKey={"Deadline Date"} value={DateFormatter(project.deadline)} />

                        <QuoteStackedListItem identifierKey={"Account"} value={"Not Assigned"} />

                        <QuoteStackedListItem identifierKey={"Field"} value={project.specialization.name} />
                    </QuoteStackedList>
                    {/* <div className="Grid-Container grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div> */}
                </section>
            </Tabs.Panel>

            <Tabs.Panel value="People">
                <section className="max-w-screen container p-5">
                    {/* <h2 className="text-2xl font-bold">Basic Data</h2> */}
                    <QuoteStackedList>
                        <QuoteStackedListItem identifierKey={"Primary PM"} value={pmFullName} />

                        <QuoteStackedListItem identifierKey={"Secondary PM"} value={"Not Assigned"} />

                        <QuoteStackedListItem identifierKey={"Sales Person"} value={"Not Assigned"} />

                        <QuoteStackedListItem identifierKey={"Account Manager"} value={"Not Assigned"} />
                    </QuoteStackedList>
                    {/* <div className="Grid-Container grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div> */}
                </section>
            </Tabs.Panel>

            <Tabs.Panel value="History">Second panel</Tabs.Panel>
        </Tabs>
    );
}
