interface WithHardwareId {
    hardwareId: string;
}

export interface EditHardwareProps extends WithHardwareId {}
export interface EditHardwarePageProps {
    params: EditHardwareProps;
}
