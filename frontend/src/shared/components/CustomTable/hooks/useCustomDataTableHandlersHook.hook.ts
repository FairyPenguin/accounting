import { useState, useCallback } from "react";
import { QueryParams } from "@/shared/types/queryParams.type";

interface UseTableHandlersProps {
    defaultPageSize?: number;
    defaultOrder?: "ASC" | "DESC";
}

interface UseTableHandlersReturn {
    queryParams: QueryParams;
    handlePageChange: (newPage: number) => void;
    handlePageSizeChange: (newPageSize: number) => void;
    handleSearch: (searchQuery: string, searchBy: string) => void;
    handleSort: (column: string, direction: "ASC" | "DESC") => void;
}

export const useCustomDataTableHandlersHook = ({
    defaultPageSize,
    defaultOrder = "ASC",
}: UseTableHandlersProps): UseTableHandlersReturn => {
    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 1,
        limit: defaultPageSize,
        order: defaultOrder,
    });

    const handlePageChange = useCallback((newPage: number) => {
        setQueryParams((prev) => ({ ...prev, page: newPage }));
    }, []);

    const handlePageSizeChange = useCallback((newPageSize: number) => {
        setQueryParams((prev) => ({ ...prev, limit: newPageSize, page: 1 }));
    }, []);

    const handleSearch = useCallback((searchQuery: string, searchBy: string) => {
        setQueryParams((prev) => ({ ...prev, search: searchQuery, searchBy, page: 1 }));
    }, []);

    const handleSort = useCallback((column: string, direction: "ASC" | "DESC") => {
        setQueryParams((prev) => ({ ...prev, orderBy: column, order: direction }));
    }, []);

    return { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort };
};
