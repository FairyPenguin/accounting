interface WithCATToolId {
    toolId: string;
}

export interface EditCATToolProps extends WithCATToolId {}
export interface EditCATToolPageProps {
    params: EditCATToolProps;
}
