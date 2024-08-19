interface WithIndustryId {
    industryId: string;
}

export interface EditIndustryProps extends WithIndustryId {}
export interface EditIndustryPageProps {
    params: EditIndustryProps;
}
