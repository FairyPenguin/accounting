interface WithCountryId {
    countryId: string;
}

export interface EditCountryProps extends WithCountryId {}
export interface EditCountryPageProps {
    params: EditCountryProps;
}
