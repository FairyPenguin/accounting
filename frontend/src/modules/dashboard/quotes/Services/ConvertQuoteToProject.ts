import { ApiURLWithUUID } from "@/shared/constants/APIURLs.Staging";
import APIRequestMethods from "@/shared/utils/FetchUtility";
import { Quote, QuoteByUUID } from "../Types/QuoteType";


export interface APIResponseType {
    success: boolean;
    message: string;
    data?: Quote;
}


export default async function ConvertQuoteToProject(UUID: string, paylaod: {}): Promise<Quote | undefined> {

    try {
        const response = await APIRequestMethods().PUTMethod<{}>(`${ApiURLWithUUID("quotations", UUID)}`, paylaod)

        const responseData: APIResponseType = await response.json();
        if (!responseData.success) {
            console.error(responseData.success, responseData.message);
        }

        if (responseData.data && responseData.success) {

            console.info("Converted Successfully");
            console.info(responseData.success, responseData.message);
            return responseData.data
        }

        return undefined


    } catch (error) {
        console.error(error);

        console.error("Failed to convert the Quote .... Read the error message below ==>\n", error);

    }

}