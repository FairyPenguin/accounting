import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { PaymentType } from "../enums";
import { IPaymentMethod } from ".";

export interface PaymentMethodPayload {
    name: string;
    paymentType: PaymentType;
    IBAN: string;
}

export type AddPaymentMethodResponse = ApiResponse<IPaymentMethod>;
