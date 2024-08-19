import { NewQuoteFormInputs } from "@/app/dashboard/quotes/new-quote/QuoteCreationForm";
import { Client } from "../../projects/Services/FetchAllClients";
import { Language } from "../../projects/Services/FetchAllLangs";
import { PM } from "../../projects/Services/FetchAllPMs";
import { ClientService } from "../../projects/Services/FetchAllClientServices";



export interface QuoteByUUID {
    id: string
    uuid: string
    createdAt: string
    updatedAt: string
    name: string
    serviceId: string
    specializationId: string
    primaryPMId: string
    clientId: string
    projectId: any
    sourceLanguageId: string
    targetLanguageId: string
    status: string
    quotationDate: string
    validUntil: any
    startDate: string
    endDate: string
    calculationUnitId: string
    workQuantity: number
    jobInstructions: string
    tenantId: string
    createdById: any
    deletedAt: any
    client: Client
    primaryPM: PM
    service: ClientService
    sourceLanguage: Language
    targetLanguage: Language

}

export interface Quote {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    serviceId: string;
    specializationId: string;
    primaryPMId: string;
    clientId: string;
    projectId: null;
    sourceLanguageId: string;
    targetLanguageId: string;
    status: string;
    quotationDate: Date;
    validUntil: null;
    startDate: Date;
    endDate: Date;
    calculationUnitId: string;
    workQuantity: number;
    jobInstructions: string;
    tenantId: string;
    createdById: null;
    deletedAt: null;
    client: Client;
    primaryPM: PM;
    service: Client;
    sourceLanguage: Language;
    targetLanguage: Language;
}


export interface quoteFormData extends NewQuoteFormInputs {
    name: string;
    startDate: Date;
    endDate: string;
    quoteId: number;
    targetLanguageId: number;
    sourceLanguageId: number;
    calculationUnitId: number;
    workQuantity: number;
    serviceId: number;
    jobInstructions: string;
    clientId: number;
    deadline: Date;
    account: string;
    clientService: string;
    clientServiceChecklist: string;
    quantity: string;
    quantityExtention: string;
    durationDate: string;
    jobDeadline: string;
    primaryPMId: string;
    secondaryPM: string;
    currency: string;
    [key: string]: string | number | string[] | number[] | Date;
}


