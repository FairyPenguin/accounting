interface WithTransferId {
    transferId: string;
}

export interface EditTransferProps extends WithTransferId {}
export interface EditTransferPageProps {
    params: EditTransferProps;
}

export interface TransferDetailsProps extends WithTransferId {}
export interface TransferDetailsPageProps {
    params: TransferDetailsProps;
}
