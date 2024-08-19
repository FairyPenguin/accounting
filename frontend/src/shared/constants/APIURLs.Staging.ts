
/**
 * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 *  * Don't change or edit this file before asking for permisson 
 * and don't edit this on staging create a new branch if you get a permisson
 * 

 */


// {{api_url}}/vendors?page=1&limit=1&search="V1"&searchBy=name&order=DESC&orderBy=id

// ========> Base Strings

// API Base route-param

const apiBaseRouteParam = "api";

// API Base URL + api => route-param

export const ApiBaseURL = "http://168.119.100.87:8000/" + apiBaseRouteParam;
// export const ApiBaseURL = "http://localhost:8000/" + apiBaseRouteParam;

// pagination query-params
export const ApiPaginationQueryParam = function (page = 1, limit = 25) {
    return `?page=${page}&limit=${limit}`;
};

// ------------------------------- Functions

// Full API END-POINT URL without pagination
export const ApiURLWithoutPagination = function (endPoint: string) {
    return `${ApiBaseURL}/${endPoint}`;
};
// Full API END-POINT URL with pagination query-params
export const ApiURLWithPaginationQP = function (page: number = 1, limit: number = 25, endPoint: string) {
    const string = `${ApiBaseURL}/${endPoint}?page=${page}&limit=${limit}`;
    // console.log(string);

    return string;
};

// Full API END-POINT URL with pagination & LookupType query-params
export const ApiURLWithPaginationAndLookupsQueryParam = function (
    page = 1,
    limit = 25,
    endPoint: string,
    lookupType: string,
) {
    return `${ApiBaseURL}/${endPoint}?page=${page}&limit=${limit}&lookupType=${lookupType}`;
};

// Full API END-POINT URL with UUID for singles ==>
/**
 * Examples:
 *  Single Project
 * Single Job
 * Single Task
 */
export const ApiURLWithUUID = function (
    endPoint: string,
    UUID: string,
    endRouteParam?: string,
) {
    return `${ApiBaseURL}/${endPoint}/${UUID}/${endRouteParam ? endRouteParam : ""}`;
};

export const ApiURLWithMultiRouteParams = function (
    endPoint: string,
    routeParam1?: string,
    routeParam2?: string,
    routeParam3?: string,
    routeParam4?: string,
) {
    return `${ApiBaseURL}/${endPoint}/${routeParam1 ? routeParam1 : ""}`;
};

