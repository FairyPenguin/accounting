"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import APIRequestMethods from "@/shared/utils/FetchUtility";
import { ApiURLWithMultiRouteParams } from "@/shared/constants/APIURLs.Staging";

export interface PostNewFIleByURLResponsePayload {
    createdAt: Date;
    updatedAt: Date;
    uuid: string;
    id: string;
    mimeType: string;
    size: number;
    createdById: string;
    name: string;
    folderId: string;
    tenantId: string;
    meta: null;
    deletedAt: null;
}

export interface UpdatedAt {
    val: string;
}


export interface PostNewFIleByURLRequestPayload {
    url: string;
    folderId: number | null
}

export interface APIResponseType {
    success: boolean;
    message: string;
    data?: PostNewFIleByURLResponsePayload;
}

export default async function PostNewFileByURL(payload: PostNewFIleByURLRequestPayload, route: string) {
    const response = await APIRequestMethods().POSTMethod(ApiURLWithMultiRouteParams("files", "url-upload"), payload)

    const responseData: APIResponseType = await response.json()

    console.log(payload);

    if (responseData.success) {
        console.error(responseData.message);
        console.error(responseData.data);

        // return { success: response.data.success };

        revalidatePath(route);
        redirect(route);
    }

    return { success: responseData.success, error: responseData.message };
}



