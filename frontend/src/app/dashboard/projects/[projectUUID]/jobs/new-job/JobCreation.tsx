"use client";

import FormSuccessBanner from "@/modules/dashboard/projects/Components/FormSuccessBanner";
import JobCreationForm from "@/modules/dashboard/projects/Components/JobCreationForm";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import PostNewJobForm, { JobRequestPayload } from "@/modules/dashboard/projects/Services/PostNewJobFormData";
import { ProjectResponsePayload } from "@/modules/dashboard/projects/Services/PostNewProjectFormData";
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";

interface PropsType {
    project: ProjectByUUID;
    clientsArray: Client[];
    UnitsArray: Unit[];
    LanguagesArray: Language[];
    SpecializationsArray: Speciality[];
    CurrenciesArray: Currency[];
    ClientServicesArray: ClientService[];
    CountriesArray: Country[];
    projectsArray?: Project[];
    setShowJobCreationForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function JobCreation({
    project,
    clientsArray,
    UnitsArray,
    LanguagesArray,
    SpecializationsArray,
    CurrenciesArray,
    ClientServicesArray,
    CountriesArray,
    projectsArray,
    setShowJobCreationForm,
}: PropsType) {
    const [responseData, setResponseData] = useState<ProjectResponsePayload>();
    const [projectId, setProjectId] = useState<number | null>(null);
    const [jobId, setJobId] = useState<number | null>(null);
    const [jobName, setJobName] = useState<string | null>(null);
    const [jobSuccess, setJobSuccess] = useState<boolean>(false);
    const [showSuccessBanner, setshowSuccessBanner] = useState<boolean>(false);

    const router = useRouter();
    const pathNameIncludsProjectUUID = usePathname();
    const searchparams = useSearchParams();
    const projectIdURLValue =
        searchparams.get("projectId") === "" ||
        searchparams.get("projectId") === undefined ||
        searchparams.get("projectId") === null
            ? false
            : searchparams.get("projectId");
    const projectNameURLValue = searchparams.get("projectName");

    // console.log(pathName);

    // POST function

    async function postJobForm(data: JobRequestPayload, value: string[], selectedProjectId: number) {
        //  Formatted Data
        /**
         *
         */
        const idsToNumbers = value.map((id: any) => Number(id));
        data.targetLanguageIds = idsToNumbers;

        // data.projectId = projectIdURLValue ? Number(projectIdURLValue) : selectedProjectId;
        data.projectId = Number(project.id);

        try {
            const postReqResponse = await PostNewJobForm(data);

            if (postReqResponse.data.data !== undefined && postReqResponse.data.success) {
                const jobData = postReqResponse.data.data;

                jobData.map((job) => {
                    return job.name;
                });

                router.replace(`/dashboard/projects/${project.uuid}`);

                setShowJobCreationForm ? setShowJobCreationForm(false) : null;
                setJobSuccess(true);
                // setshowSuccessBanner(true);

                const message = postReqResponse.data.message;
                const success = postReqResponse.data.success;
                console.log(jobData);
                console.log(message);
                console.log(success);

                console.log("...Jobs ==> POST Req Sent Successfully ^__^ ", "POSTED Successfully");
            }
        } catch (error) {
            console.error("Error:", error); // Handle error
        }
    }

    return (
        <>
            <FormSuccessBanner
                successState={showSuccessBanner}
                successMessagetext={"Job"}
                createButtonText={"task"}
                viewButtonText={"created"}
                createButtonURL={`/dashboard/projects/tasks/new-task?jobId=${jobId}&jobName=${jobName}`}
                listButtonURL={"/dashboard/jobs"}
            />
            {!jobSuccess && (
                <JobCreationForm
                    clients={clientsArray}
                    units={UnitsArray}
                    languages={LanguagesArray}
                    specializations={SpecializationsArray}
                    currencies={CurrenciesArray}
                    clientServices={ClientServicesArray}
                    countries={CountriesArray}
                    projectId={projectIdURLValue ? Number(projectIdURLValue) : 0}
                    projectName={projectNameURLValue ? projectNameURLValue : ""}
                    project={project}
                    pathNameIncludsProjectUUID={pathNameIncludsProjectUUID}
                    postFunc={postJobForm}
                    setShowJobCreationForm={setShowJobCreationForm}
                />
            )}
        </>
    );
}

export default JobCreation;
