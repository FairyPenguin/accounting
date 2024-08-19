export function extractUniquePermissions(set1: { name: string }[], set2: { name: string }[]): string[] {
    const rolePermissions = set1?.map((permission) => permission?.name);

    const userPermissions = set2?.map((permission) => permission?.name);

    const combinedPermissions = rolePermissions?.concat(userPermissions);

    return combinedPermissions?.filter((permission, index) => combinedPermissions.indexOf(permission) === index);
}
