interface WithCurrencyId {
    currencyId: string;
}

export interface EditCurrencyProps extends WithCurrencyId {}
export interface EditCurrencyPageProps {
    params: EditCurrencyProps;
}
