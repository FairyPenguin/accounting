import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ICalculationUnits } from ".";

export interface CalculationUnitPayload {
    name: string;
    symbol: string;
    exchangeRatio: string;
    default?: boolean;
}

export type AddCalculationUnitResponse = ApiResponse<ICalculationUnits>;
