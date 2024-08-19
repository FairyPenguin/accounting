import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HorizontalTab {
    id?: string;
    name: string;
    component?: React.ReactNode;
}

export interface TabData {
    id: string;
    title: string;
    horizontalTabs: HorizontalTab[];
}

interface TabsContainerProps {
    title: string;
    tabsData: TabData[];
}

const TabsContainer: React.FC<TabsContainerProps> = ({ title, tabsData }) => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const queryParams = searchParams.getAll("");
    const [activeVerticalTab, setActiveVerticalTab] = useState<number>(0);
    const [activeHorizontalTab, setActiveHorizontalTab] = useState<number>(0);

    useEffect(() => {
        const verticalTabIndex = tabsData.findIndex((tab) => tab.id === searchParams.get("tab"));
        if (verticalTabIndex !== -1) {
            setActiveVerticalTab(verticalTabIndex);
        }

        const horizontalTabIndex = tabsData[verticalTabIndex]?.horizontalTabs.findIndex(
            (tab) => tab.id === searchParams.get("subTab"),
        );
        if (horizontalTabIndex !== -1) {
            setActiveHorizontalTab(horizontalTabIndex);
        }
    }, queryParams);

    const updateURLQueryStrings = (tabQueryString: string, subTabQueryString: string) => {
        router.push(`${pathName}?tab=${tabQueryString}&subTab=${subTabQueryString}`);
    };

    return (
        <div className="flex flex-col px-5">
            <h1 className="p-3 text-lg font-bold">{title}</h1>

            <div className="flex w-full min-w-max flex-col flex-nowrap">
                {/* Vertical Tabs */}
                <div className="flex flex-row overflow-hidden">
                    <ul className="vertical-tabs-scrollbar flex max-h-[600px] min-h-full flex-col space-y-4 overflow-y-auto rounded-md border-gray-200 p-5 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {tabsData.map((tab, index) => (
                            <li
                                key={index}
                                className={`${
                                    activeVerticalTab === index
                                        ? "rounded-md bg-purple-600 text-white"
                                        : "rounded-md bg-gray-50 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                <button
                                    className="inline-flex w-full items-center rounded-lg px-4 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                                    onClick={() => {
                                        setActiveVerticalTab(index);
                                        setActiveHorizontalTab(0);
                                        updateURLQueryStrings(
                                            tab.id,
                                            tab?.horizontalTabs[activeHorizontalTab]?.name
                                                .toLowerCase()
                                                ?.replaceAll(" ", "-"),
                                        );
                                    }}
                                >
                                    {tab.title}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Horizontal Tabs and Content */}
                    <div className="flex flex-1 flex-col">
                        <div className="border-b border-gray-200">
                            <ul className="flex flex-wrap">
                                {tabsData[activeVerticalTab]?.horizontalTabs?.map((tab, index) => (
                                    <li key={index} className="mr-2">
                                        <button
                                            onClick={() => {
                                                setActiveHorizontalTab(index);
                                                updateURLQueryStrings(
                                                    tabsData[activeVerticalTab].id,
                                                    tab.name.toLowerCase().replaceAll(" ", "-"),
                                                );
                                            }}
                                            className={`p-4 ${
                                                activeHorizontalTab === index ? "text-purple-600" : "text-gray-600"
                                            }`}
                                        >
                                            {tab.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 overflow-y-auto rounded-lg bg-gray-50 p-6 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                            {tabsData[activeVerticalTab]?.horizontalTabs[activeHorizontalTab]?.component}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsContainer;
