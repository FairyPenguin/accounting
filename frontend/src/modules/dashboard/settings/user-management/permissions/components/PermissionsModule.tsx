import React, { useState, useEffect } from "react";
import IconDefend from "@/shared/components/icon/icon-defend";
import { PermissionSet } from "./PermissionSet";

interface PermissionOperation {
    label: string;
    code: string;
    status: boolean;
}

export interface PermissionsModule {
    moduleName: string;
    operations: PermissionOperation[];
}

interface PermissionsModuleProps {
    module: PermissionsModule;
}

export const PermissionsModule: React.FC<PermissionsModuleProps> = ({ module }) => {
    const [operations, setOperations] = useState<PermissionOperation[]>(
        module.operations.map((op) => ({ ...op, status: false })),
    );

    useEffect(() => {
        setOperations(module.operations.map((op) => ({ ...op, status: false })));
    }, [module.operations]);

    return (
        <div className={`flex w-full justify-around rounded-lg p-5`}>
            <div className="col-span-1 mb-4 flex items-center justify-around">
                <h3 className={`flex items-center font-bold`}>
                    <IconDefend />
                    <span className={`whitespace-wrap ml-4`}>{module.moduleName}</span>
                </h3>
            </div>

            <div>
                {operations.map((operation, index) => (
                    <PermissionSet key={index} operation={operation.label} />
                ))}
            </div>
        </div>
    );
};
