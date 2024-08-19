import { IRoleModule } from "../types";

export const transformSelectedOperationsToPermissions = (selectedOperations: IRoleModule[]) => {
    return selectedOperations.flatMap((module) =>
        module.operations.filter((operation) => operation.status).map((operation) => operation.code),
    );
};
