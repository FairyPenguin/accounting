import { PaymentType } from "../enums";

export const DEFAULT_PAYMENT_METHODS_PAGE_SIZE = 5;

export const paymentMethodsOptions = [
    { label: PaymentType.BankTransfer, value: PaymentType.BankTransfer },
    { label: PaymentType.CreditCard, value: PaymentType.CreditCard },
    { label: PaymentType.DebitCard, value: PaymentType.DebitCard },
    { label: PaymentType.PayPal, value: PaymentType.PayPal },
];
