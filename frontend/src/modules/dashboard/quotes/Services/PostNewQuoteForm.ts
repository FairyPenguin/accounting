import { NewQuoteFormInputs } from "@/app/dashboard/quotes/new-quote/QuoteCreationForm";
import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface QuoteResponsePayload {
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
}

export interface RequestPayload {
    name: string;
    serviceId: number;
    clientId: number;
    sourceLanguageId: number;
    targetLanguageId: number;
    workQuantity: number;
    calculationUnitId: number;
    primaryPMId: number;
    jobInstructions: string;
    quotationDate: string;
    specializationId: number;
    startDate: string;
    endDate: string;
}

export interface quoteFormData extends NewQuoteFormInputs {
    name: string;
    clientId: number;
    specializationId: number;
    primaryPMId: string;
    startDate: Date;
    deadline: Date;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data?: QuoteResponsePayload;
    };
}

export default async function PostNewQuoteForm(payload: quoteFormData): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().POSTMethod("quotations", payload);

        if (!response.data.success) {
            console.error(response.data.message);
        }
        console.log(response.data.message, response.data.success);

        return response;
    } catch (error) {
        return {
            data: {
                success: false,
                message: "Failed to post new quote",
            },
        };

    }
}



