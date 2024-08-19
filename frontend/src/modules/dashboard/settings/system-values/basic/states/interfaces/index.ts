interface WithStateId {
    stateId: string;
}

export interface EditStateProps extends WithStateId {}
export interface EditStatePageProps {
    params: EditStateProps;
}
