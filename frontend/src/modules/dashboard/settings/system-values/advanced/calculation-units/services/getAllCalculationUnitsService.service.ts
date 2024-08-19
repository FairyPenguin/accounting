import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllCalculationUnitsResponse } from "../types/getAllCalculationUnits.type";

export const getAllCalculationUnitsService = async (params?: QueryParams): Promise<GetAllCalculationUnitsResponse> => {
    return await APIUtility.get<GetAllCalculationUnitsResponse>("calculation-unit", params);
};
