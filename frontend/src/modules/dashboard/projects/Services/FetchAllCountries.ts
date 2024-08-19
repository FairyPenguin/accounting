import APIFunctionalUtility from "@/shared/utils/APIUtility";

export interface Country {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    lookupType: string;
    active: boolean;
    default: boolean;
    tenantId: string;
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            country: Country[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllCountries(): Promise<APIResponseType | undefined> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>("lookups/list");

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

async function CountriesFetcher(): Promise<Country[]> {
    const countries = await getAllCountries();

    if (countries && countries.data && countries.data.data && countries.data.data.country) {
        // console.log(countries.data.data.data);
        return countries.data.data.country;
    } else {
        console.log("Error--Empty  Array will Be Returned");
        return []; // Return an empty array as a fallback value
    }

    // console.log(countries);
}

export default CountriesFetcher;
