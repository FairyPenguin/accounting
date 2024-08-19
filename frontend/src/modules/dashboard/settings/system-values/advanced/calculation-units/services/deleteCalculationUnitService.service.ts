import { APIUtility } from "@/shared/utils/api.util";
import { DeleteCalculationUnitResponse } from "../types/deleteCalculationUnit.type";

export const deleteCalculationUnitService = async (
    calculationUnitId: string,
): Promise<DeleteCalculationUnitResponse> => {
    return APIUtility.delete<DeleteCalculationUnitResponse>(`calculation-unit/${calculationUnitId}`);
};
