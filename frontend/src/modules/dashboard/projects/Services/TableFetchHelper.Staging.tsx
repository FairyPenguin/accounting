import { ApiURLWithPaginationQP } from "@/shared/constants/APIURLs.Staging";
import JWT_TOKEN from "../../../../shared/constants/Tokens";

export interface APIResponseType<DataType> {
    success: boolean;
    message: string;
    data?: {
        data: DataType[];
        totalCount: number;
        totalPage: number;
    };
}

export interface DataReturnType<DataType> {
    data: DataType[];
    totalCount: number;
    totalPage: number;
}

export async function tableFetchHelper<DataType>(
    page: number,
    limit: number,
    endpoint: string,
): Promise<DataReturnType<DataType>> {
    try {
        const response = await fetch(`${ApiURLWithPaginationQP(page, limit, endpoint)}`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${JWT_TOKEN}`,
            },
        });

        const responseData: APIResponseType<DataType> = await response.json();

        if (!responseData.success) {
            console.error(responseData.message);
        }

        if (
            responseData.data &&
            responseData.data.data &&
            responseData.data.totalCount &&
            responseData.data.totalPage
        ) {
            // if (responseData.data.totalCount <= 1) {
            //     console.error(`Total Count is less than 1 and equal to Zero => ${responseData.data.totalCount}`);

            // }
            // if (responseData.data.totalPage <= 1) {
            //     console.error(`Total Pages is less than 1 and equal to Zero => ${responseData.data.totalPage}`);

            // }
            // console.log(responseData.data.data);

            return {
                data: responseData.data.data,
                totalCount: responseData.data.totalCount,
                totalPage: responseData.data.totalPage,
            };
        }

        return {
            data: [], // Return an empty array as a fallback value
            totalCount: 0,
            totalPage: 0,
        };
    } catch (error) {
        console.error(error);

        if (error === "Error: connect ECONNREFUSED 168.119.100.87:8000") {
            console.error("Server is Down");
        }

        return {
            data: [],
            totalCount: 0,
            totalPage: 0,
        };
    }
}

interface ListData<ListDataType> {
    data: ListDataType[];
    totalCount: number;
    totalPage: number;
}

interface FetchResponse<T> {
    data: T[];
    totalCount: number;
    totalPage: number;
}

// async function projectsFetcher(page: number = 1, limit: number = 100): Promise<ProjectsData> {
//     try {
//         const response = await getAllProjects(page, limit);

//         if (!response.success) {
//             console.error(response.success + "\n" + response.message);
//         }

//         if (response.data && response.data.data && response.data.totalCount && response.data.totalPage) {
//             return {
//                 data: response.data.data,
//                 totalCount: response.data.totalCount,
//                 totalPage: response.data.totalPage,
//             };
//         }

//         return {
//             data: [], // Return an empty array as a fallback value
//             totalCount: 0,
//             totalPage: 0,
//         };
//     } catch (error) {
//         /**
//          * Error Handling
//          */
//         console.error(error + "\n Error: -->Empty  Array will Be Returned");

//         return {
//             data: [], // Return an empty array as a fallback value
//             totalCount: 0,
//             totalPage: 0,
//         };
//     }
// }

// export default projectsFetcher;
