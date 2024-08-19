"use client";
// Imports
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import DropDownSelect from "@/modules/dashboard/projects/FormFieldsComponents/DropDownSelect";
import TextInput from "@/modules/dashboard/projects/FormFieldsComponents/TextInput";
import DropDownMultipleSelect from "@/modules/dashboard/projects/FormFieldsComponents/DropDownMultipleSelect";
import NumericInput from "@/modules/dashboard/projects/FormFieldsComponents/NumericInput";
import DatePickerInput from "@/modules/dashboard/projects/FormFieldsComponents/DatePickerInput";
import TextAreaInput from "@/modules/dashboard/projects/FormFieldsComponents/TextAreaInput";
import RadioGroupInput from "@/modules/dashboard/projects/FormFieldsComponents/RadioGroupInput";
import { PM } from "@/modules/dashboard/projects/Services/FetchAllPMs";
import { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { TaskByUUID } from "@/modules/dashboard/projects/Services/FetchSingleTaskByUUID";
import { taskFormData } from "@/modules/dashboard/projects/Services/UpdateSingleTaskByUUID";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import DateFormatter from "@/shared/helpers/DateFormatter";

export interface TaskInputs {
    resourceType: string;
    name: string;
    service: string;
    category: string;
    workQuantity: number;
    calculationUnitId: number;
    primaryPMId: string;
    secondaryPM: string;
    startDate: string;
    endDate: string;
    description: string;
    localizationServiceChecklist: string;
    vendorId: number;
    jobId: number;
}

type Props = {
    clients: Client[];
    languages: Language[];
    specializations: Speciality[];
    currencies: Currency[];
    clientServices: ClientService[];
    countries: Country[];
    projects?: Project[];
    projectId: number;
    projectName: string;
    vendors: Vendor[];
    units: Unit[];
    taskUUID: string;
    task: TaskByUUID;
    projectUUID: string;
    // PMs: PM[];
    pathNameIncludsProjectUUID: string;
    job: JobByUUID;

    updateTaskFunc: (data: taskFormData, UUID: string) => void;
};

export default function TaskEditingForm({
    clients,
    units,
    specializations,
    languages,
    currencies,
    clientServices,
    countries,
    projectId,
    projectName,
    pathNameIncludsProjectUUID,
    projects,
    vendors,
    taskUUID,
    projectUUID,
    task,
    job,
    updateTaskFunc,
}: Props) {
    const [value, setValue] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm<TaskInputs>();

    const onSubmit: SubmitHandler<taskFormData> = async (data) => {
        if (task) {
            data.jobId = Number(task.jobId);
        }
        console.log(data);

        updateTaskFunc(data, taskUUID);
    };

    // function handleSubmitRegular(e: any) {
    //     e.preventDefault();
    //     if (task) {
    //         getValues().jobId = Number(task.jobId);
    //     }
    //     const formData = getValues();
    //     console.log(formData);
    //     updateTaskFunc(formData, taskUUID, "");
    // }

    return (
        <>
            <section className="max-w-screen container p-5">
                <h1 className="pb-6 text-3xl">Edit Task</h1>
            </section>

            <section className="max-w-screen container p-5">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    // onSubmit={}
                    className="mx-auto max-w-5xl space-y-4"
                >
                    <div className="space-y-12 ">
                        {/* TASK SECTION */}

                        {/* Task Name */}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* In-House Service(s) && Freelancer Service(s)*/}
                            <TextInput
                                label={"Job Name"}
                                htmlFor={"job-name"}
                                id={"job-name"}
                                widthClass={"sm:col-span-5"}
                                register={register}
                                registerName={"jobId"}
                                defaultValue={job.name}
                                disabled={true}
                            />
                            <TextInput
                                label={"Task Name"}
                                htmlFor={"task-name"}
                                id={"task-name"}
                                widthClass={"sm:col-span-5"}
                                register={register}
                                registerName={"name"}
                                defaultValue={task.name}
                            />

                            <div className="flex gap-2 sm:col-span-3">
                                <NumericInput
                                    label={"Quantity"}
                                    htmlFor={"quantity"}
                                    id={"quantity"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"workQuantity"}
                                    defaultValue={task.workQuantity}
                                />
                                <DropDownSelect
                                    label={"Quantity Extention"}
                                    htmlFor={"quantity-extention"}
                                    id={"quantity-extention"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"calculationUnitId"}
                                    defaultValue={task.calculationUnit.name}
                                >
                                    {units ? (
                                        units.map((unit) => {
                                            return (
                                                <option key={unit.id} value={unit.id}>
                                                    {unit.name}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>
                            </div>

                            {/* Primary PM */}

                            {/* Secondary PM */}

                            {/* Vendor */}

                            <DropDownSelect
                                label={"Vendor"}
                                htmlFor={"vendor"}
                                id={"vendor"}
                                widthClass={"col-span-2"}
                                register={register}
                                registerName={"vendorId"}
                                defaultValue={task.vendor.name}
                            >
                                {vendors ? (
                                    vendors.map((vendor) => {
                                        return (
                                            <option key={vendor.id} value={vendor.id}>
                                                {vendor.name}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option>No Resposne From the Server</option>
                                )}
                            </DropDownSelect>

                            {/* Duration Date && Job Deadline */}

                            <DatePickerInput
                                label={"Duration Date"}
                                htmlFor={"duration-date"}
                                id={"duration-date"}
                                widthClass={"sm:col-span-3"}
                                register={register}
                                registerName={"startDate"}
                                defaultValue={DateFormatter(task.startDate)}
                            />

                            <DatePickerInput
                                label={"Job Deadline"}
                                htmlFor={"job-deadline"}
                                id={"job-deadline"}
                                widthClass={"sm:col-span-3"}
                                register={register}
                                registerName={"endDate"}
                                defaultValue={DateFormatter(task.endDate)}
                            />

                            <TextAreaInput
                                label={"Freelancer Task Instructions"}
                                htmlFor={"freelancer-task-instructions"}
                                id={"freelancer-task-instructions"}
                                widthClass={"sm:col-span-full"}
                                register={register}
                                registerName={"description"}
                                defaultValue={task.description}
                            />
                        </div>

                        {/* TASK SECTION */}

                        {/* Team Info  */}

                        {/* Pricing Info  */}

                        {/* Tasks Info  */}

                        {/* End >> of >> Sections >> */}
                        {/* ------------BUTTONS------------ */}

                        <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                            {/* Cancel Button */}

                            <Link
                                className="rounded-md bg-gray-300 px-4 py-2 shadow-sm"
                                href={`/dashboard/projects/${projectUUID}/jobs/${job.uuid}/tasks/${task.uuid}/`}
                            >
                                Cancel
                            </Link>

                            {/* Create Button */}

                            <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                                Update
                            </button>
                        </div>

                        {/* ------------BUTTONS------------ */}
                    </div>
                </form>
            </section>
        </>
    );
}
