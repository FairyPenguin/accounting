import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";
import APIRequestMethods from "@/shared/utils/FetchUtility";



export interface ChildFolder {
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
    referenceType: null;
    referenceId: null;
    deletedAt: null;
    label: string,
    value: string,
    children: ChildFolder[];
    files: ChildFile[];
    type: string
}

export interface ChildFile {
    id: string;
    uuid: string;
    name: string;
    folderId: string;
    size: number;
    mimeType: string;
    label: string;
    type: string
}




export interface FolderTree {
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
    referenceType: null | string;
    referenceId: null | string;
    deletedAt: null;
    label: string,
    value: string,
    children: ChildFolder[];
    files: ChildFile[];
    type: string
}

interface APIResponseType {
    success: boolean;
    message: string;
    data?: FolderTree
}


export async function fetchFolderTreeByUUID(UUID: string): Promise<APIResponseType> {

    try {
        const response = await APIRequestMethods().GETMethod(ApiURLWithUUID("folder", UUID, "tree"), "no-store")

        const responseData = await response.json()

        console.log(responseData);

        if (!responseData.success) {
            console.error(responseData.message);
        }

        return responseData;


    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: `Failed to fetch folder tree.....${error}`
        }
    }

}





