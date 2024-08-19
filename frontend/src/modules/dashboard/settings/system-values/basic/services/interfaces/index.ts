interface WithServiceId {
    serviceId: string;
}

export interface EditServiceProps extends WithServiceId {}
export interface EditServicePageProps {
    params: EditServiceProps;
}
