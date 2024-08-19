import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";
import APIRequestMethods from "@/shared/utils/FetchUtility";
import { QuoteByUUID } from "../Types/QuoteType";



export interface APIResponseType {
    success: boolean;
    message: string;
    data?: QuoteByUUID;
}

export default async function getSingleQuoteByUUID(UUID: string): Promise<QuoteByUUID | undefined> {

    try {
        const response = await APIRequestMethods().
            GETMethod(`${ApiURLWithUUID("quotations", UUID)}`, "default")

        const responseData: APIResponseType = await response.json();

        if (!responseData.success) {
            console.error(responseData.success, responseData.message);
        }

        if (responseData.data && responseData.success) {
            return responseData.data
        }

        return undefined


    } catch (error) {

        console.error("Failed to fetch the Quote Data.... Read the error message below ==>\n", error);

    }

}