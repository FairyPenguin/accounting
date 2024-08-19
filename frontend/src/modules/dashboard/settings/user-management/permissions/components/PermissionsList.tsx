import React from "react";
import { useGetAllPermissions } from "../hooks/getAllPermissions.hook";
import { PermissionsModule } from "./PermissionsModule";

export const PermissionsList: React.FC = () => {
    const { data: permissions } = useGetAllPermissions();

    return (
        <div className="mx-auto max-w-screen-2xl px-4">
            {permissions?.map((module, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <hr />}
                    <PermissionsModule module={module} />
                </React.Fragment>
            ))}
        </div>
    );
};
