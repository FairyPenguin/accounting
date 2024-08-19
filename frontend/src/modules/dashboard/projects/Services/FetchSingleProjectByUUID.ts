import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { PM } from "./FetchAllPMs";
import { Client } from "./FetchAllClients";
import { Speciality } from "./FetchAllSpecializations";

export interface ProjectByUUID {
    createdAt: Date;
    updatedAt: Date;
    uuid: string;
    status: string;
    id: string;
    name: string;
    clientId: string;
    specializationId: string;
    primaryPMId: string;
    startDate: Date;
    deadline: Date;
    tenantId: string;
    createdById: string;
    accountId: null;
    secondaryPMId: null;
    salesPersonId: null;
    accountManagerId: null;
    description: null;
    clientNote: null;
    internalNote: null;
    updatedById: null;
    deletedAt: null;
    primaryPM: PM
    secondaryPM: null,
    client: Client
    specialization: Speciality
    attachments: AttachmentsInProjectByUUID
}


export interface AttachmentsInProjectByUUID {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    tenantId: string;
    path: string;
    parentId: string;
    createdById: string;
    referenceType: string;
    referenceId: string;
    deletedAt: null;
}


export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data?: ProjectByUUID;
    };
}

async function getSingleProjectByUUID(UUID: string): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(`projects/${UUID}`);

        if (!response.data.success) {
            console.error(response.data.message);
        }

        return response;
    } catch (error) {
        console.error(error);

        return {
            data: {
                success: false,
                message: "Failed to fetch project data ...",
            },
        };
    }
}

// async function SingleProjectFetcher(UUID: string): Promise<Project> {
//     try {
//         const project = await getSingleProjectByUUID(UUID);

//         if (project && project.data && project.data.data) {
//             return project.data.data;
//         }
//     } catch (error) {
//         console.error("Error fetching project data", error);
//         return
//     }
// }

export default getSingleProjectByUUID;


// Example:
// {
//     "id": "2",
//     "uuid": "67c129bd-e72e-4e4b-bcad-aac810371bad",
//     "createdAt": "2024-08-11T12:40:53.126Z",
//     "updatedAt": "2024-08-11T12:40:53.126Z",
//     "name": "Small",
//     "slug": "Small",
//     "tenantId": "1",
//     "path": "/root#1/Small",
//     "parentId": "1",
//     "createdById": "2",
//     "referenceType": "project",
//     "referenceId": "301",
//     "deletedAt": null
// }


