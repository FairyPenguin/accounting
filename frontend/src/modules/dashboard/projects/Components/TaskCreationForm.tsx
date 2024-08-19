"use client";
// Imports
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DropDownSelect from "../FormFieldsComponents/DropDownSelect";
import TextInput from "../FormFieldsComponents/TextInput";
import DatePickerInput from "../FormFieldsComponents/DatePickerInput";
import TextAreaInput from "../FormFieldsComponents/TextAreaInput";
import NumericInput from "../FormFieldsComponents/NumericInput";
import { Unit } from "../Services/FetchAllCalculationUnits";
import RadioGroupInput from "../FormFieldsComponents/RadioGroupInput";
import { Vendor } from "../Services/FetchAllVendors";
import { PM } from "../Services/FetchAllPMs";
import { TaskByUUID } from "../Services/FetchSingleTaskByUUID";
import { JobByUUID } from "../Services/FetchSingleJobByUUID";
import PostNewTaskForm, { TaskRequestPayload } from "../Services/PostNewTaskFormData";
import router from "next/navigation";

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
    setShowTaskCreationForm: React.Dispatch<React.SetStateAction<boolean>>;
    job?: JobByUUID;
    vendors: Vendor[];
    units: Unit[];
    PMs: PM[];
    postFunc: (
        data: any,
        // value?: any,
        // responseData?: any,
        // setResponseData?: any,
        // setProjectSuccess?: any,
    ) => Promise<void>;
};

function TaskCreationForm({ vendors, units, PMs, postFunc, job, setShowTaskCreationForm }: Props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TaskInputs>();

    // const onSubmit: SubmitHandler<TaskInputs> = async (data) => {
    //     // data.jobId = Number(job?.id);
    //     postFunc(data);
    // };

    const onSubmit: SubmitHandler<TaskInputs> = async (data) => {
        if (job) {
            data.jobId = Number(job.id);
        }
        postFunc(data);
    };

    return (
        <>
            <section className="max-w-screen container p-5">
                <h1 className="pb-6 text-3xl">Create New Task</h1>
            </section>

            <section className="max-w-screen container bg-white p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl space-y-4">
                    <div className="space-y-12 ">
                        {/* TASK SECTION */}
                        <div className="Jobs Info border-b border-gray-900/10  px-6 py-4 pb-12 ">
                            {/* <h2 className="text-2xl font-semibold leading-7 text-gray-900">Jobs Info</h2> */}
                            <label htmlFor="htmlFor" className="block text-sm font-medium leading-6 text-gray-900">
                                Resource Type
                            </label>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <RadioGroupInput
                                    label={""}
                                    htmlFor={"client-service"}
                                    id={"client-service"}
                                    widthClass={"col-span-1"}
                                    register={register}
                                    registerName={"resourceType"}
                                    radioLabel="In-house"
                                />
                                <RadioGroupInput
                                    label={""}
                                    htmlFor={"freelancer"}
                                    id={"freelancer"}
                                    widthClass={"col-span-1"}
                                    register={register}
                                    registerName={"resourceType"}
                                    radioLabel="Freelancer"
                                />
                            </div>
                        </div>
                        {/* Task Name */}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* In-House Service(s) && Freelancer Service(s)*/}
                            <TextInput
                                label={"Task Name"}
                                htmlFor={"task-name"}
                                id={"task-name"}
                                widthClass={"sm:col-span-5"}
                                register={register}
                                registerName={"name"}
                            />

                            <div className="flex gap-2 sm:col-span-3">
                                <DropDownSelect
                                    label={"Category"}
                                    htmlFor={"category"}
                                    id={"category"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"category"}
                                >
                                    {/* {units ? (
                                        units.map((unit, index) => {
                                            return <option key={index}>{unit.name}</option>;
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )} */}
                                </DropDownSelect>

                                <DropDownSelect
                                    label={"Service"}
                                    htmlFor={"service"}
                                    id={"service"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"service"}
                                >
                                    {/* {units ? (
                                        units.map((unit, index) => {
                                            return <option key={index}>{unit.name}</option>;
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )} */}
                                </DropDownSelect>
                            </div>

                            <div className="flex gap-2 sm:col-span-3">
                                <NumericInput
                                    label={"Quantity"}
                                    htmlFor={"quantity"}
                                    id={"quantity"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"workQuantity"}
                                />
                                <DropDownSelect
                                    label={"Quantity Extention"}
                                    htmlFor={"quantity-extention"}
                                    id={"quantity-extention"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"calculationUnitId"}
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
                            <DropDownSelect
                                label={"Primary PM "}
                                htmlFor={"primary-pm"}
                                id={"primary-pm"}
                                widthClass={"sm:col-span-2"}
                                register={register}
                                registerName={"primaryPMId"}
                            >
                                {PMs ? (
                                    PMs.map((PM, _index) => {
                                        // Get Pm fullname
                                        const pmFullName = PM.firstName + " " + PM.lastName;

                                        return (
                                            <option
                                                //  key={index}
                                                key={PM.id}
                                                value={PM.id}
                                            >
                                                {pmFullName}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option>No Resposne From the Server</option>
                                )}
                            </DropDownSelect>

                            {/* Secondary PM */}
                            <DropDownSelect
                                label={"Secondary PM "}
                                htmlFor={"secondary-pm"}
                                id={"secondary-pm"}
                                widthClass={"sm:col-span-2"}
                                register={register}
                                registerName={"secondaryPM"}
                            >
                                {""}
                            </DropDownSelect>

                            {/* Vendor */}

                            <DropDownSelect
                                label={"Vendor"}
                                htmlFor={"vendor"}
                                id={"vendor"}
                                widthClass={"col-span-2"}
                                register={register}
                                registerName={"vendorId"}
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
                            />

                            <DatePickerInput
                                label={"Job Deadline"}
                                htmlFor={"job-deadline"}
                                id={"job-deadline"}
                                widthClass={"sm:col-span-3"}
                                register={register}
                                registerName={"endDate"}
                            />

                            <DropDownSelect
                                label={"Localization Service Checklist"}
                                htmlFor={"currency"}
                                id={"currency"}
                                widthClass={"sm:col-span-full"}
                                register={register}
                                registerName={"localizationServiceChecklist"}
                            >
                                {/* {currencies ? (
                                    currencies.map((currency, index) => {
                                        return <option key={index}>{currency.name}</option>;
                                    })
                                ) : (
                                    <option>No Resposne From the Server</option>
                                )} */}
                            </DropDownSelect>

                            <TextAreaInput
                                label={"Freelancer Task Instructions"}
                                htmlFor={"freelancer-task-instructions"}
                                id={"freelancer-task-instructions"}
                                widthClass={"sm:col-span-full"}
                                register={register}
                                registerName={"description"}
                            />
                        </div>

                        {/* TASK SECTION */}
                    </div>
                    {/* ------------BUTTONS------------ */}

                    <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                        {/* Cancel Button */}

                        <button
                            type="button"
                            className="rounded-md bg-gray-300 px-4 py-2 shadow-sm"
                            onClick={() => {
                                setShowTaskCreationForm(false);
                            }}
                        >
                            Cancel
                        </button>

                        {/* Create Button */}

                        <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                            Create
                        </button>
                    </div>

                    {/* ------------BUTTONS------------ */}
                </form>
            </section>
        </>
    );
}

export default TaskCreationForm;
