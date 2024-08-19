import { IRoleModule } from "../types";

export const alignPermissionsWithCurrentState = (
    currentPermissionsModule: IRoleModule[],
    allPermissionsModule: IRoleModule[],
): IRoleModule[] => {
    const currentModulesMap = new Map(
        currentPermissionsModule.map((module) => [module.moduleName, new Set(module.operations.map((op) => op.code))]),
    );

    const updatedModules = allPermissionsModule?.map((module) => {
        const currentOpsCodes = currentModulesMap.get(module.moduleName);

        const updatedOperations = module.operations.map((operation) => ({
            ...operation,
            status: currentOpsCodes?.has(operation.code) ?? false,
        }));

        return {
            ...module,
            operations: updatedOperations,
        };
    });

    return updatedModules;
};
