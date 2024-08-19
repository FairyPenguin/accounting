export interface QueryParams {
    page?: number;
    limit?: number;
    search?: string;
    searchBy?: string;
    orderBy?: string;
    order?: 'ASC' | 'DESC';
}
