export const createPermissionModuleName = (operationCode: string) => {
    const modulePart = operationCode.split(".")[0];

    return `${modulePart.charAt(0).toUpperCase() + modulePart.slice(1)}s Management`;
};
