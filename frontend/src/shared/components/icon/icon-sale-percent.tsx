import { FC } from 'react';

interface IconSalesPercentProps {
    className?: string;
}

const IconSalePercent: FC<IconSalesPercentProps> = ({ className }) => {
    return (
        <svg className={`h-6 w-6 text-gray-200 dark:text-white ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                d="M20.3 8.6c.1.3.3.6.6.8a3.5 3.5 0 0 1 0 5.2 2.4 2.4 0 0 0-.8 1.9 3.5 3.5 0 0 1-3.6 3.6 2.5 2.5 0 0 0-2 .8 3.5 3.5 0 0 1-5 0 2.4 2.4 0 0 0-2-.8A3.5 3.5 0 0 1 4 16.5a2.4 2.4 0 0 0-.8-2 3.5 3.5 0 0 1 0-5 2.4 2.4 0 0 0 .8-2A3.5 3.5 0 0 1 7.5 4a2.4 2.4 0 0 0 2-.8 3.5 3.5 0 0 1 5 0 2.4 2.4 0 0 0 2 .8A3.5 3.5 0 0 1 20 7.5c0 .4 0 .7.2 1ZM9.9 7.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 2.2a1 1 0 0 0-1.5-1.4l-6.2 6.2a1 1 0 0 0 1.4 1.4l6.2-6.2Zm-2.9 5a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default IconSalePercent;
