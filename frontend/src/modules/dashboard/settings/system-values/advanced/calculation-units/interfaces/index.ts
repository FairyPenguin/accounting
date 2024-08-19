interface WithCalculationUnitId {
    calculationUnitId: string;
}

export interface EditCalculationUnitProps extends WithCalculationUnitId {}
export interface EditCalculationUnitPageProps {
    params: EditCalculationUnitProps;
}
