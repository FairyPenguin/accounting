"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ApiBaseURL } from "@/shared/constants/APIURLs";
import JWT_TOKEN from "@/shared/constants/Tokens";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import useDeleteConfirmModalWithRouteHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithRouteHook";

interface Currency {
    id: string;
    name: string;
    symbol: string;
    ISOCode: string;
}

interface Client {
    id: string;
    uuid: string;
    name?: string;
    email?: string | null;
    contactNumber?: string | null;
    taxNo?: string;
    taxNo2?: string;
    individual?: boolean;
    source?: string;
    note?: string;
    currency?: Currency;
}

const ClientView: React.FC = () => {
    const [client, setClient] = useState<Client | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const clientUUID = searchParams.get("clientuuid");
    const { opened, open, close, deleteItemFromItemView } = useDeleteConfirmModalWithRouteHook();

    useEffect(() => {
        if (!clientUUID) {
            console.error('Client UUID is missing');
            return;
        }

        const fetchClient = async () => {
            try {
                const response = await fetch(`${ApiBaseURL}/clients/${clientUUID}`, {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`,
                    },
                });
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        setClient(result.data);
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
    }, [clientUUID]);

    const handleDeleteClient = async () => {
        if (!clientUUID) return;
        try {
            const response = await fetch(`${ApiBaseURL}/clients/${clientUUID}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${JWT_TOKEN}`,
                },
            });
            if (response.ok) {
                router.push("/dashboard/clients");
            } else {
                console.error('Failed to delete client');
            }
        } catch (error) {
            console.error('Error deleting client:', error);
        }
    };

    const handleAddNewClient = () => {
        router.push("/dashboard/clients/new-client");
    };

    const handleEditClient = () => {
        if (client) {
            router.push(`/dashboard/clients/${client.id}/edit?clientuuid=${client.uuid}`);
        }
    };

    return (
        <>
            <DeleteConfirmModal
                opened={opened}
                close={close}
                actionFunc={async () => await deleteItemFromItemView(client?.uuid || "", "clients", "/dashboard/clients")}
            />
            <div>
                <h1 className="text-2xl font-bold">Client Details</h1>
                <div>
                    <div className="flex justify-end space-x-4">
                        {/* Add New Client Button */}
                        <button
                            onClick={handleAddNewClient}
                            type="button"
                            className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                        >
                            Add New Client
                        </button>
                        {/* Edit Client Button */}
                        <button
                            onClick={handleEditClient}
                            type="button"
                            className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                        >
                            Edit Client
                        </button>
                        {/* Delete Client Button */}
                        <button
                            onClick={open}
                            type="button"
                            className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                        >
                            Delete Client
                        </button>
                    </div>
                </div>
                {client ? (
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Name:</strong></td>
                                <td>{client.name || "N/A"}</td>
                            </tr>
                            <tr>
                                <td><strong>Email:</strong></td>
                                <td>{client.email || "N/A"}</td>
                            </tr>
                            <tr>
                                <td><strong>Contact Number:</strong></td>
                                <td>{client.contactNumber || "N/A"}</td>
                            </tr>
                            <tr>
                                <td><strong>Tax Number:</strong></td>
                                <td>{client.taxNo || "N/A"}</td>
                            </tr>
                            <tr>
                                <td><strong>Tax Number 2:</strong></td>
                                <td>{client.taxNo2 || "N/A"}</td>
                            </tr>
                            <tr>
                                <td><strong>Is Individual:</strong></td>
                                <td>{client.individual ? "Yes" : "No"}</td>
                            </tr>
                            {client.source && (
                                <tr>
                                    <td><strong>Source:</strong></td>
                                    <td>{client.source}</td>
                                </tr>
                            )}
                            {client.note && (
                                <tr>
                                    <td><strong>Note:</strong></td>
                                    <td>{client.note}</td>
                                </tr>
                            )}
                            {client.currency && (
                                <tr>
                                    <td><strong>Currency:</strong></td>
                                    <td>{client.currency.name} ({client.currency.symbol})</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                ) : (
                    <p>Unable to fetch client details.</p>
                )}
            </div>
        </>
    );
};

export default ClientView;
