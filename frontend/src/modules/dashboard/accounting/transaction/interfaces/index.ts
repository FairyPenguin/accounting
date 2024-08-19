interface WithTransactionId {
    transactionId: string;
}

export interface EditTransactionProps extends WithTransactionId {}
export interface EditTransactionPageProps {
    params: EditTransactionProps;
}

export interface TransactionDetailsProps extends WithTransactionId {}
export interface TransactionDetailsPageProps {
    params: TransactionDetailsProps;
}
