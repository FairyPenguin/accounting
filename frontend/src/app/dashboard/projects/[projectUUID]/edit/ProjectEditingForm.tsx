"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePickerInput from "@/modules/dashboard/projects/FormFieldsComponents/DatePickerInput";
import DropDownSelect from "@/modules/dashboard/projects/FormFieldsComponents/DropDownSelect";
import TextInput from "@/modules/dashboard/projects/FormFieldsComponents/TextInput";
import { Account } from "@/modules/dashboard/projects/Services/FetchAllAccounts";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import UpdateSignleProjectByUUID, {
    taskFormData,
} from "@/modules/dashboard/projects/Services/UpdateSingleProjectByUUID";
import DateFormatter from "@/shared/helpers/DateFormatter";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

/**
 *
 *
 *
 *
 */

export type ProjectUpdateFormInputs = {
    name: string;
    clientId: string;
    startDate: string;
    deadline: string;
    specializationId: number;
    accountId: string;
    clientService: string;
    clientServiceChecklist: string;
    jobName: string;
    sourceLanguage: string;
    targetLanguages: string[];
    tools: string;
    quantity: string;
    quantityExtention: string;
    durationDate: string;
    endDate: string;
    jobInstructions: string;
    primaryPMId: string;
    secondaryPM: string;
    salesPerson: string;
    accountManager: string;
    totalPrice: string;
    unitPrice: string;
    currency: string;
    inHouseService: string;
    freelancerService: string;
    inHouseTaskInstructions: string;
    freelancerTaskInstructions: string;
    [key: string]: string | number | string[];
};

type Props = {
    clients: Client[];
    units: Unit[];
    specializations: Speciality[];
    currencies: Currency[];
    clientServices: ClientService[];
    countries: Country[];
    accounts: Account[];
    project: ProjectByUUID;
    updateProjectFunc: (data: taskFormData, UUID: string) => void;
};
function ProjectEditingForm({
    clients,
    units,
    specializations,
    currencies,
    clientServices,
    countries,
    accounts,
    project,
    updateProjectFunc,
}: Props) {
    const schema = z
        .object({
            name: z.string().min(1, { message: "Name is required" }),
            specializationId: z.string().min(1, { message: "Name is required" }),
        })
        .refine((data) => data.name !== project.name || data.specializationId !== project.description, {
            message: "The entered values are the same as the current values",
            path: ["name", "specializationId"],
        });

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ProjectUpdateFormInputs>({ resolver: zodResolver(schema) });

    const UUID = project.uuid;
    const formData = getValues();

    const onSubmit: SubmitHandler<ProjectUpdateFormInputs> = async (data) => {
        await UpdateSignleProjectByUUID(data, UUID);
        // console.log((await UpdateSignleProjectByUUID(data, UUID)).data.message);
    };

    function handleSubmitRegular(e: any) {
        e.preventDefault();
        const formData = getValues();
        console.log(formData);
        updateProjectFunc(formData, UUID);
    }

    // const onSubmit: SubmitHandler<ProjectUpdateFormInputs> = (data) => console.log(data);

    return (
        <>
            <section className="max-w-screen container px-2 py-5">
                <h1 className="pb-6 text-3xl">Edit Project</h1>
                <div className="bg-gray-300 p-5">
                    <p className="text-xl">Project name: {project.name}</p>
                </div>
            </section>
            <section className="max-w-screen container px-2 py-5">
                <form
                    onSubmit={handleSubmitRegular}
                    // onSubmit={handleSubmit(onSubmit)}
                    // action={() => updateProjectFunc(formData, UUID)}
                    // // action={}
                    className="mx-auto max-w-5xl space-y-4"
                >
                    <div className="space-y-12">
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Project Name */}

                            <TextInput
                                label={"Project name"}
                                htmlFor={"project-name"}
                                id={"project-name"}
                                widthClass={"sm:col-span-4"}
                                register={register}
                                registerName={"name"}
                                defaultValue={project.name}
                            />

                            {/* Client Dropdown */}
                            <DropDownSelect
                                label={"Client"}
                                htmlFor={"client"}
                                id={"client"}
                                widthClass={"col-span-full"}
                                register={register}
                                registerName={"clientId"}
                                defaultValue={project.clientId}
                            >
                                {clients ? (
                                    clients.map((client, _index) => {
                                        return (
                                            <option
                                                //  key={index}
                                                key={client.id}
                                                value={client.id}
                                            >
                                                {client.name}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option>No Resposne From the Server</option>
                                )}
                            </DropDownSelect>

                            <DatePickerInput
                                label={"Start At"}
                                htmlFor={"start-date"}
                                id={"start-date"}
                                widthClass={"col-span-full"}
                                register={register}
                                registerName={"startDate"}
                                defaultValue={DateFormatter(project.startDate)}
                            />

                            <DatePickerInput
                                label={"Deadline"}
                                htmlFor={"deadline"}
                                id={"deadline"}
                                widthClass={"col-span-full"}
                                register={register}
                                registerName={"deadline"}
                                defaultValue={DateFormatter(project.deadline)}
                            />

                            {/* Account DropDown*/}

                            <DropDownSelect
                                label={"Account"}
                                htmlFor={"account"}
                                id={"account"}
                                widthClass={""}
                                register={register}
                                registerName={"account"}
                            >
                                {accounts ? (
                                    accounts.map((account) => {
                                        return (
                                            <option value={account.id} key={account.id}>
                                                {account.name}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option>No Resposne From the Server</option>
                                )}
                            </DropDownSelect>

                            {/* Specialization DropDown*/}

                            <DropDownSelect
                                label={"Specialization"}
                                htmlFor={"specialization"}
                                id={"specialization"}
                                widthClass={"md:col-span-2"}
                                register={register}
                                registerName={"specializationId"}
                            >
                                {specializations ? (
                                    specializations.map((speciality) => {
                                        return (
                                            <option value={speciality.id} key={speciality.id}>
                                                {speciality.name}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option>No Resposne From the Server</option>
                                )}
                            </DropDownSelect>
                        </div>
                    </div>

                    {/* ------------BUTTONS------------ */}

                    <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                        {/* Cancel Button */}

                        <Link
                            // type="button"
                            className="rounded-md bg-gray-300 px-4 py-2 shadow-sm"
                            // onClick={handleReset}
                            href={`/dashboard/projects/${project.uuid}`}
                        >
                            Cancel
                        </Link>

                        {/* Create Button */}

                        <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                            Update
                        </button>
                    </div>

                    {/* ------------BUTTONS------------ */}
                </form>
            </section>
        </>
    );
}

export default ProjectEditingForm;
