import React from "react";
import { genderOptions } from "../constants";
import { Gender } from "../enums/gender.enum";
import { UseFormRegister, useForm } from "react-hook-form";
import { UserFormPayload } from "../hooks/useUserForm.hook";
import { useGetAllRoles } from "../../roles/hooks/useGetAllRoles.hook";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";
import { CustomSelectField } from "@/shared/components/forms/select-field/CustomSelectField";

export interface UserFormProps {
    values?: UserFormPayload;
    register: UseFormRegister<UserFormPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const UserForm: React.FC<UserFormProps> = ({
    values,
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitButtonLabel,
}) => {
    const { data: rolesData } = useGetAllRoles({ limit: 100, page: 1 }) as any;

    return (
        <div onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-row gap-2">
                {/* First Name Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="firstName"
                        name="firstName"
                        register={register}
                        placeholder="John"
                        autoComplete="off"
                        rules={{ required: "First name is required!" }}
                        label="First Name"
                    />
                    {errors.firstName && <p className="mt-2 text-sm text-red-600">{`${errors.firstName.message}`}</p>}
                </div>

                {/* Last Name Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="lastName"
                        name="lastName"
                        register={register}
                        placeholder="Doe"
                        autoComplete="off"
                        rules={{ required: "Last name is required!" }}
                        label="Last Name"
                    />
                    {errors.lastName && <p className="mt-2 text-sm text-red-600">{`${errors.lastName.message}`}</p>}
                </div>
            </div>

            <div className="my-5 flex w-full flex-row gap-2">
                {/* Email Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="email"
                        name="email"
                        type="email"
                        register={register}
                        placeholder="ahmed@gmail.com"
                        rules={{ required: "Email is required!" }}
                        label="Email"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{`${errors.email.message}`}</p>}
                </div>

                {/* Password Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="password"
                        name="password"
                        type="password"
                        register={register}
                        placeholder="password"
                        rules={{ required: "Password is required!" }}
                        label="Password"
                    />
                    {errors.password && <p className="mt-2 text-sm text-red-600">{`${errors.password.message}`}</p>}
                </div>
            </div>

            <div className="flex w-full flex-row gap-2">
                {/* Gender Select Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="gender"
                        name="gender"
                        register={register}
                        options={genderOptions}
                        placeholder="Select Gender"
                        label="Gender"
                        selectedOption={values?.gender || Gender.Male}
                    />
                    {errors.gender && <p className="mt-2 text-sm text-red-600">{`${errors.gender.message}`}</p>}
                </div>

                {/* Roles Select Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="role"
                        name="role"
                        register={register}
                        options={rolesData?.data?.data.map((el: any) => ({ label: el.name, value: el.name }))}
                        placeholder="Select Role"
                        rules={{ required: "Role is required!" }}
                        label="Role"
                        selectedOption={values?.role || ""}
                    />
                    {errors.role && <p className="mt-2 text-sm text-red-600">{`${errors.role.message}`}</p>}
                </div>
            </div>

            <div className="mt-5 flex w-full flex-row gap-2">
                {/* Phone Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="phone"
                        name="phone"
                        type="tel"
                        register={register}
                        placeholder="+12010101010"
                        rules={{
                            pattern: {
                                value: /^\+[1-9]\d{1,14}$/,
                                message: "Invalid phone number, must be in international format",
                            },
                        }}
                        label="Phone"
                    />

                    {errors.phone && <p className="mt-2 text-sm text-red-600">{`${errors.phone.message}`}</p>}
                </div>

                {/* Skype ID Field */}
                {/* <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="skypeId"
                        name="skypeId"
                        register={register}
                        placeholder="John.Doe"
                        rules={{ required: "Skype ID is required!" }}
                        label="Skype ID"
                        value={values?.skypeId}
                    />

                    {errors.skypeId && <p className="mt-2 text-sm text-red-600">{`${errors.skypeId.message}`}</p>}
                </div> */}

                {/* Address Field */}
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="address"
                        name="address"
                        register={register}
                        placeholder="150 Elm Street, Springfield, IL 62704, USA"
                        label="Address"
                    />
                    {errors.address && <p className="mt-2 text-sm text-red-600">{`${errors.address.message}`}</p>}
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-7 flex justify-center">
                <button
                    type="submit"
                    className="w-80 whitespace-nowrap rounded-lg bg-purple-600 px-3 py-2 text-center font-semibold text-white"
                >
                    {submitButtonLabel}
                </button>
            </div>
        </div>
    );
};
