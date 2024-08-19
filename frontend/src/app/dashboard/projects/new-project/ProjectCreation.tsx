"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FormSuccessBanner from "@/modules/dashboard/projects/Components/FormSuccessBanner";
import ProjectCreationForm from "@/modules/dashboard/projects/Components/ProjectCreationForm";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import PostNewProjectForm, {
    ProjectResponsePayload,
    projectFormData,
} from "@/modules/dashboard/projects/Services/PostNewProjectFormData";
import { Account } from "@/modules/dashboard/projects/Services/FetchAllAccounts";

interface PropsType {
    clientsArray: Client[];
    UnitsArray: Unit[];
    LanguagesArray: Language[];
    SpecializationsArray: Speciality[];
    CurrenciesArray: Currency[];
    ClientServicesArray: ClientService[];
    CountriesArray: Country[];
    AccountsArray: Account[];
}

export default function ProjectCreation({
    clientsArray,
    UnitsArray,
    LanguagesArray,
    SpecializationsArray,
    CurrenciesArray,
    ClientServicesArray,
    CountriesArray,
    AccountsArray,
}: PropsType) {
    const [responseData, setResponseData] = useState<ProjectResponsePayload>();
    const [projectId, setProjectId] = useState<number | null>(null);
    const [projectName, setProjectName] = useState<string | null>(null);
    const [projectSuccess, setProjectSuccess] = useState<boolean>(false);
    const [showSuccessBanner, setshowSuccessBanner] = useState<boolean>(false);

    const router = useRouter();

    console.log(projectId);

    async function postProjectForm(data: projectFormData, value: any) {
        // data.specializationId = 3;
        data.primaryPMId = "2";
        // data.targetLanguages = value;

        // Pass data to PostNewProjectForm() func
        try {
            const postReqResponse = await PostNewProjectForm(data);

            if (postReqResponse.data.data !== undefined && postReqResponse.data.success) {
                const projectData = postReqResponse.data.data;

                router.push(
                    `/dashboard/projects/${projectData.uuid}?projectId=${projectData.id}&projectName=${projectData.name}`,
                );

                setProjectSuccess(true);

                setResponseData(projectData);
                setProjectId(Number(projectData.id));
                setProjectName(projectData.name);
                console.log("from If success ==>");
                console.log(projectId);

                const message = postReqResponse.data.message;
                const success = postReqResponse.data.success;
                console.log(projectData);
                console.log(message);
                console.log(success);

                console.log("...Project ==> POST Req Sent Successfully ^__^ ", "POSTED Successfully");
            }
        } catch (error) {
            console.error("Error:", error); // Handle error
        }
    }

    return (
        <>
            <FormSuccessBanner
                successState={showSuccessBanner}
                successMessagetext={"Project"}
                createButtonText={"job"}
                createButtonURL={`/dashboard/projects/jobs/new-job?projectId=${projectId}&projectName=${projectName}`}
                listButtonURL={"/dashboard/projects"}
                viewButtonText={"projects"}
            />
            {!projectSuccess && (
                <ProjectCreationForm
                    clients={clientsArray}
                    units={UnitsArray}
                    languages={LanguagesArray}
                    specializations={SpecializationsArray}
                    currencies={CurrenciesArray}
                    clientServices={ClientServicesArray}
                    countries={CountriesArray}
                    accounts={AccountsArray}
                    postFunc={postProjectForm}
                />
            )}
        </>
    );
}
