import APIFunctionalUtility from "@/shared/utils/APIUtility";
import JWT_TOKEN from "../../../../shared/constants/Tokens";

export interface Client {
    id: string;
    name: string;
}

export interface PrimaryPM {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Project {
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
    client: Client;
    primaryPM: PrimaryPM;
}

export interface APIResponseType {
    success: boolean;
    message: string;
    data?: {
        data: Project[];
        totalCount: number;
        totalPage: number;
    };
}

interface FetchError {
    error: true;
    message: string;
}

export async function getAllProjects(page: number = 1, limit: number = 100): Promise<APIResponseType> {
    try {
        const response = await fetch(`http://168.119.100.87:8000/api/projects?page=${page}&limit=${limit}`, {
            // cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${JWT_TOKEN}`,
            },
        });

        const responseData: APIResponseType = await response.json();

        if (!responseData.success) {
            console.error(responseData.message);
        }

        return responseData;
    } catch (error) {
        console.error(error);

        if (error === "Error: connect ECONNREFUSED 168.119.100.87:8000") {
            console.error("Server is Down");
        }

        return {
            success: false,
            message: "Failed to fetch projects list .....",
        };
    }
}

interface ProjectsData {
    data: Project[];
    totalCount: number;
    totalPage: number;
}

interface FetchResponse<T> {
    data: T[];
    totalCount: number;
    totalPage: number;
}

async function projectsFetcher(page: number = 1, limit: number = 100): Promise<ProjectsData> {
    try {
        const response = await getAllProjects(page, limit);

        if (!response.success) {
            console.error(response.success + "\n" + response.message);
        }

        if (response.data && response.data.data && response.data.totalCount && response.data.totalPage) {
            return {
                data: response.data.data,
                totalCount: response.data.totalCount,
                totalPage: response.data.totalPage,
            };
        }

        return {
            data: [], // Return an empty array as a fallback value
            totalCount: 0,
            totalPage: 0,
        };
    } catch (error) {
        /**
         * Error Handling
         */
        console.error(error + "\n Error: -->Empty  Array will Be Returned");

        return {
            data: [], // Return an empty array as a fallback value
            totalCount: 0,
            totalPage: 0,
        };
    }
}

export default projectsFetcher;
