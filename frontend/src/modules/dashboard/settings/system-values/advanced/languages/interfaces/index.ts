interface WithLanguageId {
    languageId: string;
}

export interface EditLanguageProps extends WithLanguageId {}
export interface EditLanguagePageProps {
    params: EditLanguageProps;
}
