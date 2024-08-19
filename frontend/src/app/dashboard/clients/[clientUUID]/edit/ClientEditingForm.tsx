"use client";

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import JWT_TOKEN from '@/shared/constants/Tokens';
import { ApiBaseURL } from '@/shared/constants/APIURLs';
import { useRouter, useSearchParams } from "next/navigation";
import { Client } from '@/modules/dashboard/projects/Services/FetchAllClients';
import TextInput from '../../../../../modules/dashboard/projects/FormFieldsComponents/TextInput';

export type ClientUpdateFormInputs = {
    name: string;
    email: string;
    contactNumber: string;
    taxNo: string;
    taxNo2: string;
    individual: boolean;
    source: string;
    note: string;
    currencyId: number;
};

function ClientEditingForm() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [currencies, setCurrencies] = useState<any[]>([]);
    const [selectedCurrency, setSelectedCurrency] = useState<number | null>(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ClientUpdateFormInputs>();
    const [client, setClient] = useState<Client | null>(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const clientuuid = searchParams.get("clientuuid");

    useEffect(() => {
        if (!clientuuid || typeof clientuuid !== 'string') {
            console.error('Client UUID is missing or invalid');
            return;
        }

        const fetchClient = async () => {
            try {
                const response = await fetch(`${ApiBaseURL}/clients/${clientuuid}`, {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`,
                    },
                });
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        const clientData = result.data;
                        setClient(clientData);
                        setValue('name', clientData.name);
                        setValue('email', clientData.email);
                        setValue('contactNumber', clientData.contactNumber);
                        setValue('taxNo', clientData.taxNo);
                        setValue('taxNo2', clientData.taxNo2);
                        setValue('individual', clientData.individual);
                        setValue('source', clientData.source);
                        setValue('note', clientData.note);
                        setSelectedCurrency(clientData.currencyId);
                    } else {
                        console.error('Failed to fetch client details');
                    }
                } else {
                    console.error('Failed to fetch client details');
                }
            } catch (error) {
                console.error('Error fetching client details:', error);
            }
        };

        fetchClient();
    }, [clientuuid, setValue]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch(`${ApiBaseURL}/currencies/dropdown?page=1&limit=100`, {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`,
                    },
                });
                if (response.ok) {
                    const result = await response.json();
                    setCurrencies(result.data.data || []);
                } else {
                    console.error('Failed to fetch currencies');
                }
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchCurrencies();
    }, []);

    const onSubmit = async (data: ClientUpdateFormInputs) => {
        setErrorMessage(null);
        setSuccessMessage(null);

        try {
            const response = await fetch(`${ApiBaseURL}/clients/${clientuuid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JWT_TOKEN}`,
                },
                body: JSON.stringify({
                    ...data,
                    currencyId: selectedCurrency,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                if (result.message === 'Updated successfully') {
                    setSuccessMessage(result.message);
                    router.push('/dashboard/clients/');
                } else {
                    setErrorMessage(result.message.join(' '));
                }
            } else {
                setErrorMessage(result.message.join(' '));
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setErrorMessage('An error occurred while submitting the form');
        }
    };


    return (
        <>
            <section className="max-w-screen container p-5">
                <h1 className="pb-6 text-3xl">Edit Client</h1>
            </section>

            <section className="max-w-screen container p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl space-y-4">
                    <div className="space-y-12">
                        <div className="project-info rounded-md border-b border-gray-900/10 bg-white px-6 py-4 pb-12">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Client Info</h2>

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
                                        label={"Client Email"}
                                        htmlFor={"client-email"}
                                        id={"client-email"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"email"}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
                                    {errors.contactNumber && <p className="text-red-500">{errors.contactNumber.message}</p>}
                                </div>
                                <div className="mb-4 sm:col-span-4">
                                    <label htmlFor="individual" className="block text-sm font-medium text-gray-700">Individual</label>
                                    <input
                                        type="checkbox"
                                        id="individual"
                                        {...register('individual')}
                                        className="mt-1"
                                    />
                                    {errors.individual && <p className="text-red-500">{errors.individual.message}</p>}
                                </div>
                                <div className="mb-4 sm:col-span-4">
                                    <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
                                    <select
                                        id="source"
                                        {...register('source')}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Select a source</option>
                                        <option value="linked-in">LinkedIn</option>
                                    </select>
                                    {errors.source && <p className="text-red-500">{errors.source.message}</p>}
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
                                    <TextInput
                                        label={"Tax No"}
                                        htmlFor={"taxNo"}
                                        id={"taxNo"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"taxNo"}
                                    />
                                    {errors.taxNo && <p className="text-red-500">{errors.taxNo.message}</p>}
                                </div>
                                <div className="mb-4 sm:col-span-4">
                                    <TextInput
                                        label={"Tax No 2"}
                                        htmlFor={"taxNo2"}
                                        id={"taxNo2"}
                                        widthClass={"sm:col-span-4"}
                                        register={register}
                                        registerName={"taxNo2"}
                                    />
                                    {errors.taxNo2 && <p className="text-red-500">{errors.taxNo2.message}</p>}
                                </div>
                                <div className="mb-4 sm:col-span-4">
                                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
                                    <select
                                        id="currency"
                                        value={selectedCurrency ?? ''}
                                        onChange={(e) => setSelectedCurrency(Number(e.target.value))}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>Select a currency</option>
                                        {currencies.map((currency: any) => (
                                            <option key={currency.id} value={currency.id}>{currency.symbol}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                        <button
                            type="button"
                            className="rounded-md bg-gray-300 px-4 py-2 shadow-sm"
                            onClick={() => router.push('/dashboard/clients/')}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                            Update
                        </button>
                    </div>
                </form>
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </section>
        </>
    );
}

export default ClientEditingForm;
