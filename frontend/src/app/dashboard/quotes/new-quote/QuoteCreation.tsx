"use client";
import { Account } from "@/modules/dashboard/projects/Services/FetchAllAccounts";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { PM } from "@/modules/dashboard/projects/Services/FetchAllPMs";
import QuoteCreationForm from "./QuoteCreationForm";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { useRouter } from "next/navigation";
import { quoteFormData } from "@/modules/dashboard/quotes/Types/QuoteType";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import PostNewQuoteForm from "@/modules/dashboard/quotes/Services/PostNewQuoteForm";

type Props = {
    clientsArray: Client[];
    unitsArray: Unit[];
    languagesArray: Language[];
    clientServicesArray: ClientService[];
    accountsArray: Account[];
    PMsArray: PM[];
    SpecializationsArray: Speciality[];
};

function QuoteCreation({
    clientsArray,
    unitsArray,
    languagesArray,
    clientServicesArray,
    accountsArray,
    PMsArray,
    SpecializationsArray,
}: Props) {
    const router = useRouter();

    async function postQuoteForm(data: quoteFormData, value: any) {
        // Convert language Id to number before pass it to PostNewProjectForm() func
        // const convertedLanguageIdToNumber = Number(value);
        // data.targetLanguageId = convertedLanguageIdToNumber;

        // Pass data to PostNewProjectForm() func
        try {
            const postReqResponse = await PostNewQuoteForm(data);
            if (postReqResponse.data.data !== undefined && postReqResponse.data.success) {
                const projectData = postReqResponse.data.data;
                router.push("/dashboard/quotes");
                // setProjectSuccess(true);
                // setResponseData(projectData);
                // setProjectId(Number(projectData.id));
                // setProjectName(projectData.name);
                // console.log("from If success ==>");
                // console.log(projectId);
                const message = postReqResponse.data.message;
                const success = postReqResponse.data.success;
                console.log(projectData);
                console.log(message);
                console.log(success);
                console.log("...Quote ==> POST Req Sent Successfully ^__^ ", "POSTED Successfully");
            }
        } catch (error) {
            console.error("Error:", error); // Handle error
        }
    }

    return (
        <>
            <QuoteCreationForm
                clients={clientsArray}
                units={unitsArray}
                languages={languagesArray}
                clientServices={clientServicesArray}
                accounts={accountsArray}
                PMs={PMsArray}
                postFunc={postQuoteForm}
                specializations={SpecializationsArray}
            />
        </>
    );
}

export default QuoteCreation;
