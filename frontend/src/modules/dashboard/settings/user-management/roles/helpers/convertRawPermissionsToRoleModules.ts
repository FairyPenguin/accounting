import { IRoleModule } from "../types";
import { IPermission } from "../../permissions/types";
import { createPermissionModuleName } from "../../permissions/helpers/createPermissionModuleName.helper";
import { createPermissionOperationName } from "../../permissions/helpers/createPermissionOperationName.helper";

export const convertRawPermissionsToRoleModules = (selectedOperationCodes: IPermission[]): IRoleModule[] => {
    const modulesObj: { [key: string]: IRoleModule } = {};

    selectedOperationCodes?.forEach(({ name }) => {
        const moduleName = createPermissionModuleName(name);
        const operationName = createPermissionOperationName(name);

        if (!modulesObj[moduleName]) {
            modulesObj[moduleName] = {
                moduleName,
                operations: [{ label: operationName, code: name, status: false }],
            };
        } else {
            modulesObj[moduleName]?.operations.push({ label: operationName, code: name, status: false });
        }
    });

    return Object.values(modulesObj);
};
