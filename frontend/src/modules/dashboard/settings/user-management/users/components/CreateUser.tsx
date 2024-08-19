import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import JWT_TOKEN from "@/shared/constants/Tokens";
import { ApiBaseURL } from "@/shared/constants/APIURLs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";
import { CustomSelectField } from "@/shared/components/forms/select-field/CustomSelectField";
import { genderOptions } from "../constants";

export type UserCreationFormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    address?: string;
    gender?: string;
    phone?: string;
};

export default function CreateUser() {
    const [roles, setRoles] = useState<any[]>([]);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<UserCreationFormInputs>();

    const role = watch("role");

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await fetch(`${ApiBaseURL}/roles/?page=1&limit=100`, {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`,
                    },
                });
                if (response.ok) {
                    const result = await response.json();
                    setRoles(result.data.data || []);
                } else {
                    console.error("Failed to fetch Roles");
                }
            } catch (error) {
                console.error("Error fetching Roles:", error);
            }
        };

        fetchRoles();
    }, []);

    const onSubmit = async (data: UserCreationFormInputs) => {
        try {
            const selectedRoleName = roles.find((role) => role.id === data.role)?.name;

            const response = await fetch(`${ApiBaseURL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JWT_TOKEN}`,
                },
                body: JSON.stringify({
                    ...data,
                    role: selectedRoleName, // Send role name instead of ID
                }),
            });

            if (response.ok) {
                const result = await response.json();
                if (result.message === "Added successfully") {
                    router.push("/dashboard/settings/user-management?tab=users&subTab=all-users");
                    toast.success(result.message);
                } else {
                    toast.error(result.message);
                }
            } else {
                const result = await response.json();
                toast.error(`${result.message.join(" ") || "An error occurred"}`);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            toast.error("An error occurred while submitting the form");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Section Title */}
                <div className="max-w-screen container p-5">
                    <h1 className="pb-6 text-3xl">Add User:</h1>
                </div>

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
                            rules={{ required: "Gender is required!" }}
                        />
                        {errors.gender && <p className="mt-2 text-sm text-red-600">{`${errors.gender.message}`}</p>}
                    </div>

                    {/* Roles Select Field */}
                    <div className="flex flex-1 flex-col sm:mr-14">
                        <CustomSelectField
                            id="role"
                            name="role"
                            register={register}
                            options={roles.map((el: any) => ({ label: el.name, value: el.id }))}
                            placeholder="Select Role"
                            rules={{ required: "Role is required!" }}
                            label="Role"
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
                        Create User
                    </button>
                </div>
            </form>
        </div>
    );
}
