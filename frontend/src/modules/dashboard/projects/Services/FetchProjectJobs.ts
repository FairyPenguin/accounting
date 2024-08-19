import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { JobResponsePayload } from "./PostNewJobFormData";
import { ApiURLWithUUID } from "@/shared/constants/APIURLs";
import JWT_TOKEN from "@/shared/constants/Tokens";

export interface JobInProjectJobsList {
    id: string;
    uuid: string;
    name: string;

}

export interface JobsResponseType {
    id: string;
    name: string;
    jobs: JobInProjectJobsList[];
}

export interface APIResponseType {
    success: boolean;
    message: string;
    data?: {
        id: string;
        name: string;
        jobs: JobInProjectJobsList[];
    };
}


async function getProjectJobsByUUID(UUID: string): Promise<JobsResponseType> {
    try {
        const response = await fetch(ApiURLWithUUID("projects", UUID, "jobs"), {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${JWT_TOKEN}`,
            },
        })

        const responseData: APIResponseType = await response.json();


        if (!responseData.success) {
            console.error(responseData.message);
        }

        if (
            responseData.data
            &&
            responseData.data.id
            &&
            responseData.data.name
            &&
            responseData.data.jobs

        ) {

            return {
                jobs: responseData.data.jobs,
                name: responseData.data.name,
                id: responseData.data.id,
            };
        }

        return {
            jobs: [], // Return an empty array as a fallback value
            name: "",
            id: "",
        };

    } catch (error) {
        console.error(error);

        return {
            jobs: [],
            name: "",
            id: "",
        };

    }
}

export default getProjectJobsByUUID;

