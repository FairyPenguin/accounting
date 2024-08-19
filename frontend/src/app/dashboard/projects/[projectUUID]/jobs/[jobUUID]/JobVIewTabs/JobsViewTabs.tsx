"use client";
import { Tabs } from "@mantine/core";
import classes from "./Tabs.module.css";
import DateFormatter from "@/shared/helpers/DateFormatter";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import QuoteStackedList from "@/modules/dashboard/quotes/Components/QuoteStackedList";
import QuoteStackedListItem from "@/modules/dashboard/quotes/Components/QuoteStackedListItem";
import FolderTreeTable from "../FolderTreeTable/FolderTreeTable";
import { ChildFolder } from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import UploadManager from "./UploadManager";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    job: JobByUUID;
    FoldersArray: ChildFolder[] | ProjectByUUID[];
    project: ProjectByUUID;
}
export default function JobViewTabs({ job, FoldersArray, project }: Props) {
    const [selectedFolder, setSelectedFolder] = useState("");
    const [folderID, setFolderID] = useState("");
    // const [activeTab, setActiveTab] = useState<string | null>("Basic Data");

    // truncate Function or CSS as a btter solution
    // 9 words 32 characters
    const router = useRouter();
    const searchParams = useSearchParams();

    const activeTabURLQueryParamValue = searchParams.get("tab");

    const pmFullName = project.primaryPM.firstName + " " + project.primaryPM.lastName;

    return (
        <>
            <h1>{activeTabURLQueryParamValue}</h1>

            <Tabs
                // value={activeTabURLQueryParamValue}
                onChange={(tab) => {
                    // setActiveTab(tab);
                    router.push(`?tab=${encodeURIComponent(tab ? tab : "")}`, { scroll: false });
                }}
                variant="outline"
                defaultValue={"Basic Data"}
                classNames={classes}
            >
                <Tabs.List grow>
                    {/* Basic Data */}
                    <Tabs.Tab
                        //  onClick={() => router.push(`?tab=${"Basic Data"}`, { scroll: false })}

                        value="Basic Data"
                    >
                        Basic Data
                    </Tabs.Tab>
                    {/* File Manager */}
                    <Tabs.Tab
                        // onClick={() => router.push(`?tab=${"File Manager"}`, { scroll: false })}

                        value="File Manager"
                    >
                        File Manager
                    </Tabs.Tab>
                    {/* People */}
                    <Tabs.Tab
                        // onClick={() => router.push(`?tab=${"People"}`, { scroll: false })}

                        value="People"
                    >
                        People
                    </Tabs.Tab>
                    {/* History */}
                    <Tabs.Tab
                        // onClick={() => router.push(`?tab=${"History"}`, { scroll: false })}

                        value="History"
                    >
                        History
                    </Tabs.Tab>
                    {/* End of tabs <-- */}
                </Tabs.List>
                <Tabs.Panel value="File Manager">
                    <h2 className="text-2xl font-bold py-8">File Manager</h2>
                    <h3 className="text-lg font-bold py-1">Upload Manager</h3>
                    <UploadManager selectedFolder={selectedFolder} folderID={folderID} job={job} project={project} />
                    {/* Table ==> */}
                    <h3 className="text-lg font-bold py-8">Folders and Files List: </h3>
                    <FolderTreeTable
                        selectedFolder={selectedFolder}
                        setSelectedFolder={setSelectedFolder}
                        records={FoldersArray}
                        project={project}
                        folderID={folderID}
                        setFolderID={setFolderID}
                    />
                </Tabs.Panel>
                {/* Tabs Data */}
                <Tabs.Panel value="Basic Data">
                    <section className="max-w-screen container p-5">
                        {/* <h2 className="text-2xl font-bold">Basic Data</h2> */}
                        <QuoteStackedList>
                            {/* <QuoteStackedListItem identifierKey={"Client"} value={job.client.name} /> */}
                            {/* <QuoteStackedListItem identifierKey={"Field"} value={quote} /> */}
                            <QuoteStackedListItem identifierKey={"Client Service"} value={job.service.name} />
                            <QuoteStackedListItem identifierKey={"Source Language"} value={job.sourceLanguage.name} />
                            {/* <QuoteStackedListItem identifierKey={"Target Language"} value={job.targetLanguage.name} /> */}
                            <QuoteStackedListItem identifierKey={"Quantity"} value={job.workQuantity} />
                            {/* <QuoteStackedListItem identifierKey={"Client"} value={quote} /> */}
                            <QuoteStackedListItem identifierKey={"Start Date"} value={DateFormatter(job.startDate)} />
                            <QuoteStackedListItem identifierKey={"End Date"} value={DateFormatter(job.endDate)} />
                            {/* <QuoteStackedListItem
                                identifierKey={"Client Deadline"}
                                value={DateFormatter(job.quotationDate)}
                            /> */}
                            {/* <QuoteStackedListItem identifierKey={"Job Owner"} value={pmFullName} /> */}
                        </QuoteStackedList>
                        <div className="Grid-Container grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
                    </section>
                    <section className="Instructions mt-6 mb-6  bg-white px-4 py-3">
                        <h2 className="text-2xl font-bold">Job Instructions</h2>
                        <div>
                            <p className="p-4 mt-8 border border-slate-300 text-lg">{job.jobInstructions}</p>
                        </div>
                    </section>
                </Tabs.Panel>
                <Tabs.Panel value="People">
                    <section className="max-w-screen container p-5">
                        <h2 className="text-2xl font-bold">Team</h2>
                        <QuoteStackedList>
                            {/* <QuoteStackedListItem identifierKey={"Client"} value={job.client.name} /> */}
                            {/* <QuoteStackedListItem identifierKey={"Field"} value={quote} /> */}
                            <QuoteStackedListItem identifierKey={"Primary PM"} value={pmFullName} />
                            <QuoteStackedListItem identifierKey={"Secondary PM"} value={"Not Assigned"} />
                            {/* <QuoteStackedListItem identifierKey={"Target Language"} value={job.targetLanguage.name} /> */}
                            <QuoteStackedListItem identifierKey={"Sales Person"} value={"Not Assigned"} />
                            {/* <QuoteStackedListItem identifierKey={"Client"} value={quote} /> */}
                            <QuoteStackedListItem identifierKey={"Account Manager"} value={"Not Assigned"} />
                            {/* <QuoteStackedListItem
                                identifierKey={"Client Deadline"}
                                value={DateFormatter(job.quotationDate)}
                            /> */}
                            {/* <QuoteStackedListItem identifierKey={"Job Owner"} value={pmFullName} /> */}
                        </QuoteStackedList>
                    </section>
                </Tabs.Panel>
                <Tabs.Panel value="History">
                    <section className="max-w-screen container p-5">
                        <h2 className="text-2xl font-bold">{""}</h2>
                    </section>
                </Tabs.Panel>
            </Tabs>
        </>
    );
}
