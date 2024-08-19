import { IRoleModule } from "../types";
import { GetRoleDetailsResponseData } from "../types/getRoleDetails.type";
import { getRoleDetailsService } from "../services/getRoleDetails.service";
import { UseQueryResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { convertRawPermissionsToRoleModules } from "../helpers/convertRawPermissionsToRoleModules";

export function useGetRoleDetailsHook(roleId: string): UseQueryResult<GetRoleDetailsResponseData> {
    const queryClient = useQueryClient();

    const roleDetails = useQuery<GetRoleDetailsResponseData>({
        queryKey: ["getRoleDetails", roleId],
        queryFn: async (): Promise<GetRoleDetailsResponseData> => {
            const response = (await getRoleDetailsService(roleId)) as any;

            const roleDetailsData = response?.data?.data;

            const roleModules: IRoleModule[] = convertRawPermissionsToRoleModules(roleDetailsData.permissions);

            return {
                name: roleDetailsData.name,
                permissions: roleModules,
            };
        },
    });

    queryClient.invalidateQueries({
        queryKey: ["getRoleDetails", roleId],
        exact: true,
    });

    return roleDetails;
}
