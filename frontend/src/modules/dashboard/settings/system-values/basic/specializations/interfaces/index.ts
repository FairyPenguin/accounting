interface WithSpecializationId {
    specializationId: string;
}

export interface EditSpecializationProps extends WithSpecializationId {}
export interface EditSpecializationPageProps {
    params: EditSpecializationProps;
}
