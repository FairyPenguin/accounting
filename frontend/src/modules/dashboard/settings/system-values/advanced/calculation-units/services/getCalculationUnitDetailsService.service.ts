import { APIUtility } from "@/shared/utils/api.util";
import { GetCalculationUnitDetailsResponse } from "../types/getCalculationUnitDetails.type";

export const getCalculationUnitDetailsService = async (
    calculationUnitId: string,
): Promise<GetCalculationUnitDetailsResponse> => {
    return await APIUtility.get<GetCalculationUnitDetailsResponse>(`calculation-unit/${calculationUnitId}`);
};
