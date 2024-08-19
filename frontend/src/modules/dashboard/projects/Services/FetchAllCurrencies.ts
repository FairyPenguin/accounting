import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Currency {
    id: string;
    name: string;
    symbol: string;
    ISOCode: string;
    exchangeRate: string;
    active: boolean;
    default: boolean;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Currency[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllCurrencies(): Promise<APIResponseType | undefined> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            "currencies?page=1&limit=50",
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

async function CurrenciesFetcher(): Promise<Currency[]> {
    const Currencies = await getAllCurrencies();

    if (Currencies && Currencies.data && Currencies.data.data && Currencies.data.data.data) {
        // console.log(Currencies.data.data.data);
        return Currencies.data.data.data;
    } else {
        console.log("Error--Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(Currencies);
}

export default CurrenciesFetcher;
