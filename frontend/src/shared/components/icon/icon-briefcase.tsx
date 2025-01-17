import { FC } from 'react';

interface IconBriefCaseProps {
    className?: string;
}

const IconBriefCase: FC<IconBriefCaseProps> = ({ className }) => {
    return (
        <svg className={`h-6 w-6 text-gray-200 dark:text-white ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default IconBriefCase;
