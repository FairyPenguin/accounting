import { IRoleModule } from "../types";
import { useEffect, useState } from "react";

interface UseToggleRoleModuleProps {
    initialModules: IRoleModule[];
    onOperationChange?: (modules: IRoleModule[]) => void;
}

export const useToggleRoleModule = ({ initialModules, onOperationChange }: UseToggleRoleModuleProps) => {
    const [moduleStates, setModuleStates] = useState<IRoleModule[]>(initialModules);

    const toggleAllModuleOperations = (moduleName: string) => {
        setModuleStates((prevStates) =>
            prevStates.map((module) => {
                if (module.moduleName === moduleName) {
                    const allSelected = module.operations.every((op) => op.status);
                    return {
                        ...module,
                        operations: module.operations.map((op) => ({ ...op, status: !allSelected })),
                    };
                }
                return module;
            }),
        );
    };

    const toggleOperation = (moduleName: string, operationCode: string) => {
        setModuleStates((prevStates) =>
            prevStates.map((module) => {
                if (module.moduleName === moduleName) {
                    return {
                        ...module,
                        operations: module.operations.map((op) =>
                            op.code === operationCode ? { ...op, status: !op.status } : op,
                        ),
                    };
                }
                return module;
            }),
        );
    };

    useEffect(() => {
        onOperationChange?.(moduleStates);
    }, [moduleStates, onOperationChange]);

    return { moduleStates, toggleAllModuleOperations, toggleOperation };
};
