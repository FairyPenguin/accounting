import { useRouter } from "next/navigation";
import React from "react";

interface BreadcrumbItem {
    label?: string;
    href?: string;
}

interface CustomBreadcrumbProps {
    items: BreadcrumbItem[];
}

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({ items }) => {
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, href?: string) => {
        event.preventDefault();
        if (href) {
            router.push(href);
        }
    };

    return (
        <div className="mb-5">
            <ol className="flex font-semibold text-gray-900 dark:text-white-dark">
                {items.map((item, index) => {
                    const isLastItem = index === items.length - 1;
                    return (
                        <li key={index} className="before:px-1.5 before:content-['/']">
                            {item.href && !isLastItem ? (
                                <button
                                    onClick={(event) => handleClick(event, item.href)}
                                    className="text-gray-700 hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70"
                                >
                                    {item.label}
                                </button>
                            ) : isLastItem ? (
                                <button
                                    onClick={(event) => handleClick(event, item.href)}
                                    className="text-purple-500 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-400"
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <button
                                    className="text-black hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70"
                                    disabled
                                >
                                    {item.label}
                                </button>
                            )}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default CustomBreadcrumb;
