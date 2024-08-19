import React from 'react';
import ClientEditingForm from './ClientEditingForm';
import { ClientByUUID } from '@/modules/dashboard/clients/services/FetchClientByUUID';

interface PropsType {
    client: ClientByUUID;
    uuid: string;
}

function ClientEditing() {
    return (
        <ClientEditingForm
            
        />
    );
}

export default ClientEditing;
