"use client";

import { useState, useEffect } from "react";
import TextInput from "../../projects/FormFieldsComponents/TextInput";
import { useForm } from "react-hook-form";
import JWT_TOKEN from "@/shared/constants/Tokens";
import { ApiBaseURL } from "@/shared/constants/APIURLs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export type VendorCreationFormInputs = {
    name: string;
    type: string;
    contactNumber: string;
    note: string;
    email: string;
    firstName: string;
    lastName: string;
};

export default function VendorCreationForm() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VendorCreationFormInputs>();

    const onSubmit = async (data: VendorCreationFormInputs) => {
        setErrorMessage(null);

        try {
            const response = await fetch(`${ApiBaseURL}/vendors`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JWT_TOKEN}`,
                },
                body: JSON.stringify({
                    ...data,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                if (result.message === "Added successfully") {
                    router.push("/dashboard/vendors");
                    toast.success(result.message);
                }
                console.log("Vendor created:", result);
            } else {
                const result = await response.json();
                setErrorMessage(result.message.join(" "));
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            // setErrorMessage("An error occurred while submitting the form");
            toast.error("Error Occured");
        }
    };

    return (
        <>
            <section className="max-w-screen container p-5">
                <h1 className="pb-6 text-3xl">New Vendor</h1>
            </section>

            <section className="max-w-screen container p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl space-y-4">
                    <div className="space-y-12">
                        <div className="project-info rounded-md border-b border-gray-900/10 bg-white px-6 py-4 pb-12">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Vendor Info</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="mb-4 sm:col-span-4">
                                    <TextInput
                                        label={"Client name"}
                                        htmlFor={"client-name"}
                                        id={"client-name"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"name"}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </div>

                                <div className="mb-4 sm:col-span-4">
                                    <TextInput
                                        label={"Contact Number"}
                                        htmlFor={"client-contactNumber"}
                                        id={"client-contactNumber"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"contactNumber"}
                                    />
                                    {errors.contactNumber && (
                                        <p className="text-red-500">{errors.contactNumber.message}</p>
                                    )}
                                </div>

                                <div className="mb-4 sm:col-span-4">
                                    <TextInput
                                        label={"Note"}
                                        htmlFor={"note"}
                                        id={"note"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"note"}
                                    />
                                    {errors.note && <p className="text-red-500">{errors.note.message}</p>}
                                </div>

                                <div className="mb-4 sm:col-span-4">
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                        Type
                                    </label>
                                    <select
                                        id="type"
                                        {...register("type")}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Select a type</option>
                                        <option value="Freelancer">Freelancer</option>
                                        <option value="In-House">Company</option>
                                        <option value="Compony">In-House</option>
                                    </select>
                                    {errors.type && <p className="text-red-500">{errors.type.message}</p>}
                                </div>


                                <div className="mb-4 sm:col-span-4">
                                    <TextInput
                                        label={"Email"}
                                        htmlFor={"email"}
                                        id={"email"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"email"}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>

                                <div className="mb-4 sm:col-span-4">
                                    <TextInput
                                        label={"First Name"}
                                        htmlFor={"firstName"}
                                        id={"firstName"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"firstName"}
                                    />
                                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                                </div>

                                <div className="mb-4 sm:col-span-4">
                                    <TextInput
                                        label={"Last Name"}
                                        htmlFor={"lastName"}
                                        id={"lastName"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"lastName"}
                                    />
                                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                                </div>



                            </div>
                        </div>
                    </div>
                    {errorMessage && (
                        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                        <button type="button" className="rounded-md bg-gray-300 px-4 py-2 shadow-sm">
                            Cancel
                        </button>
                        <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                            Create
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
