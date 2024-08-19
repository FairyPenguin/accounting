interface WithPaymentMethodId {
    paymentMethodId: string;
}

export interface EditPaymentMethodProps extends WithPaymentMethodId {}
export interface EditPaymentMethodPageProps {
    params: EditPaymentMethodProps;
}
