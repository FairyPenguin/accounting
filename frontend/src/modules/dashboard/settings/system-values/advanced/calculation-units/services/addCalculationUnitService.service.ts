import { APIUtility } from "@/shared/utils/api.util";
import { AddCalculationUnitResponse, CalculationUnitPayload } from "../types/addCalculationUnit.type";

export const addCalculationUnitService = async (
    payload: CalculationUnitPayload,
): Promise<AddCalculationUnitResponse> => {
    return await APIUtility.post<AddCalculationUnitResponse>("calculation-unit", payload);
};
