import React, { useRef } from "react";
import { IRoleModule } from "../types";
import IconDefend from "@/shared/components/icon/icon-defend";
import { useToggleRoleModule } from "../hooks/useToggleRoleModule.hook";

interface RoleModulesProps {
    modules: IRoleModule[];
    onOperationChange?: (modules: IRoleModule[]) => void;
    userPermissions?: { name: string }[];
}

export const RoleModules: React.FC<RoleModulesProps> = ({
    modules,
    onOperationChange,
    userPermissions = [],
}) => {
    const selectAllRefs = useRef<{ [moduleName: string]: HTMLInputElement }>({});

    const isPermissionsEmpty = userPermissions.length === 0;

    const initialModuleStates = modules.map((module) => ({
        ...module,
        operations: module.operations.map((operation) => ({
            ...operation,
            status: isPermissionsEmpty ? operation.status : userPermissions.some((perm) => perm.name === operation.code),
        })),
    }));

    const { moduleStates, toggleAllModuleOperations, toggleOperation } = useToggleRoleModule({
        initialModules: initialModuleStates,
        onOperationChange,
    });

    return (
        <div className="w-full">
            {moduleStates?.map((module) => (
                <div
                    className="m-3 flex w-full flex-row items-center justify-around rounded-lg py-5"
                    key={module.moduleName}
                >
                    <h3 className="flex items-center font-bold">
                        <IconDefend />
                        <span className="ml-4">{module.moduleName}</span>
                    </h3>

                    <div className="flex items-center">
                        <input
                            ref={(el) => {
                                if (el) {
                                    selectAllRefs.current[module.moduleName] = el;
                                }
                            }}
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-purple-500"
                            onChange={() => toggleAllModuleOperations(module.moduleName)}
                            checked={module.operations.every((op) => op.status)}
                        />
                        <span className="ml-2 text-gray-700">Select All</span>
                    </div>

                    <div className="flex flex-col items-start justify-center">
                        {module.operations.map((operation) => (
                            <div className="flex items-center justify-center" key={operation.code}>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={operation.status}
                                        onChange={() => toggleOperation(module.moduleName, operation.code)}
                                        className="form-checkbox h-5 w-5 text-purple-500"
                                    />
                                    <span className="slider round"></span>
                                </label>
                                <span className="text-md p-2 font-semibold">{operation.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
