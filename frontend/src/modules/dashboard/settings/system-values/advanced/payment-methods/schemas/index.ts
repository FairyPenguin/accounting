import * as yup from "yup";
import { PaymentType } from "../enums";

export const PaymentMethodSchema = yup.object({
    name: yup
        .string()
        .required("Name is required!")
        .min(2, "Name must be at least 2 characters long.")
        .max(50, "Name must be less than 50 characters long."),
    paymentType: yup
        .mixed()
        .oneOf(Object.values(PaymentType), "Invalid payment type")
        .required("Payment type is required!"),
    IBAN: yup
        .string()
        .matches(/^[A-Z0-9]+$/, "Invalid IBAN format")
        .required("IBAN is required for bank transfers")
        .when("paymentType", {
            is: PaymentType.BankTransfer,
            then: yup.string().required("IBAN is required for Bank Transfers."),
            otherwise: yup.string().notRequired(),
        }),
});
