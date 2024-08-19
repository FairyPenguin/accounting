interface WithSoftwareId {
    softwareId: string;
}

export interface EditSoftwareProps extends WithSoftwareId {}
export interface EditSoftwarePageProps {
    params: EditSoftwareProps;
}
