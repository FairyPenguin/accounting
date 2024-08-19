interface WithAccountId {
    accountId: string;
}

export interface EditAccountProps extends WithAccountId {}
export interface EditAccountPageProps {
    params: EditAccountProps;
}

export interface AccountDetailsProps extends WithAccountId {}
export interface AccountDetailsPageProps {
    params: AccountDetailsProps;
}
