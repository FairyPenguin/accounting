import { PaymentType } from "../enums";

export type IPaymentMethod = {
    name: string;
    paymentType: PaymentType;
    IBAN: string;
    deletedAt: null | string;
    id: number;
    createdAt: string;
    updatedAt: string;
    active: boolean;
    default: boolean;
    preferredItem: boolean;
};
