import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Language {
    id: string;
    name: string;
    symbol: string;
    ISOCode2L: string;
    ISOCode3L: string;
    active: boolean;
    default: boolean;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Language[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllLanguages(): Promise<APIResponseType | undefined> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            "languages/dropdown?page=1&limit=50",
        );

        return response;
    } catch (error) {
        console.error(error);

        if (error === "Error: connect ECONNREFUSED 168.119.100.87:8000") {
            console.error("Server is Down");
            return undefined;
        }
        // throw new Error(`Server is Down`);
        // throw error;
    }
}

async function LanguagesFetcher(): Promise<Language[]> {
    const languages = await getAllLanguages();

    if (languages && languages.data && languages.data.data && languages.data.data.data) {
        // console.log(languages.data.data.data);
        return languages.data.data.data;
    } else {
        console.log("Error--Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(units);
}

export default LanguagesFetcher;
