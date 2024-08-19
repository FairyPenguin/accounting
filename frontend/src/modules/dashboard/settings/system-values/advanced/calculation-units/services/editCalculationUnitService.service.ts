import { APIUtility } from "@/shared/utils/api.util";
import { CalculationUnitPayload } from "../types/addCalculationUnit.type";
import { EditCalculationUnitResponse } from "../types/editCalculationUnit.type";

export const editCalculationUnitService = async ({
    calculationUnitId,
    payload,
}: {
    calculationUnitId: string;
    payload: CalculationUnitPayload;
}): Promise<EditCalculationUnitResponse> => {
    return await APIUtility.put<EditCalculationUnitResponse>(`calculation-unit/${calculationUnitId}`, payload);
};
