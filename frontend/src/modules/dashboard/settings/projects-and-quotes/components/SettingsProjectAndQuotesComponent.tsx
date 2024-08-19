import TabsContainer, { TabData } from '@/shared/components/TabsContainer.component';
import React from 'react';

const tabsData: TabData[] = [
    {
        id: '1',
        title: 'Settings',
        horizontalTabs: [
            { name: 'Defaults (Classic)', component: <h3 key="defaults-classic">Defaults (classic)</h3> },
            { name: 'Scheduling', component: <h3 key="scheduling">Scheduling</h3> },
            { name: 'Availability Requests (Classic)', component: <h3 key="availability-requests-classic">Availability Requests (Classic)</h3> },
            { name: 'Finance', component: <h3 key="finance">Finance</h3> },
            { name: 'Workflows (Classic)', component: <h3 key="workflows-classic">Workflows (Classic)</h3> },
            { name: 'Notifications & Alerts', component: <h3 key="notifications-alerts">Notifications & Alerts</h3> },
            { name: 'Responsible Persons (Classic)', component: <h3 key="responsible-persons-classic">Responsible Persons (Classic)</h3> },
        ],
    },
    {
        id: '2',
        title: 'Automation (Smart)',
        horizontalTabs: [{ name: 'All System Smart Automation', component: <h3 key="all-system-smart-automation">All System Smart Automation</h3> }],
    },
    {
        id: '3',
        title: 'Process Templates (Smart)',
        horizontalTabs: [{ name: 'All Process Templates', component: <h3 key="all-process-templates">All Process Templates</h3> }],
    },
    {
        id: '4',
        title: 'Process Steps (Smart)',
        horizontalTabs: [{ name: 'All Process Steps', component: <h3 key="all-process-steps">All Process Steps</h3> }],
    },
    {
        id: '5',
        title: 'Workflow Definition (Classic)',
        horizontalTabs: [{ name: 'All Workflow Definitions', component: <h3 key="all-workflow-definitions">All Workflow Definitions</h3> }],
    },
    {
        id: '6',
        title: 'Automatic Actions (Classic)',
        horizontalTabs: [{ name: 'All Automatic Actions', component: <h3 key="all-automatic-actions">All Automatic Actions</h3> }],
    },
    {
        id: '7',
        title: 'Vendor Selection Rules (Smart)',
        horizontalTabs: [{ name: 'All Vendor Selection Rules', component: <h3 key="all-vendor-selection-rules">All Vendor Selection Rules</h3> }],
    },
    {
        id: '8',
        title: 'Vendor Selection Rules (Classic)',
        horizontalTabs: [
            {
                name: 'All Vendor Selection Rules for Availability Requests',
                component: <h3 key="all-vendor-selection-rules-for-availability-requests">All Vendor Selection Rules for Availability Requests</h3>,
            },
        ],
    },
    {
        id: '9',
        title: 'Workflow Resources Selection Rules (Classic)',
        horizontalTabs: [{ name: 'All Selection Rules for Workflow Resources', component: <h3 key="all-selection-rules-for-workflow-resources">All Selection Rules for Workflow Resources</h3> }],
    },
];

export const SettingsProjectsAndQuotesComponent: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={'Projects and Quotes:'} />;
};
