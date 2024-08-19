type ActionKeys = "create" | "view" | "update" | "delete";

interface ActionMap {
    [key: string]: string;
}

const actionMap: ActionMap = {
    create: "Create",
    view: "View",
    update: "Update",
    delete: "Delete",
};

export const createPermissionOperationName = (operationCode: string): string => {
    const parts = operationCode.split(".");

    if (parts.length !== 2) return "Invalid Operation Code";

    const [module, action] = parts;

    const readableAction =
        action in actionMap ? actionMap[action as ActionKeys] : action.charAt(0).toUpperCase() + action.slice(1);

    const readableModule = module.charAt(0).toUpperCase() + module.slice(1);

    return `${readableAction} ${readableModule}`;
};
