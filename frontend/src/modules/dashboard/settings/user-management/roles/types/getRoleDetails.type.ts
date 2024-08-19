import { IRoleModule } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetRoleDetailsResponseData = {
    name: string;
    permissions: IRoleModule[];
};

export type GetRoleDetailsResponse = ApiResponse<GetRoleDetailsResponseData>;

export interface GetRoleDetailsPageProps {
    params: {
        roleId?: string;
    };
}
