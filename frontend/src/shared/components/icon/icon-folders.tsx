import { FC } from 'react';

interface IconFolderProps {
    className?: string;
}

const IconFolder: FC<IconFolderProps> = ({ className }) => {
    return (
        <svg className={`h-6 w-6 text-gray-200 dark:text-white ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M6 5c0-1.1.9-2 2-2h4.2a2 2 0 0 1 1.6.9L15.2 6H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v-5a3 3 0 0 0-3-3h-3.2l-1.2-1.7A3 3 0 0 0 9.2 6H6V5Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M3 9c0-1.1.9-2 2-2h4.2a2 2 0 0 1 1.6.9l1.4 2.1H3V9Zm0 3v7c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2v-7H3Z" clipRule="evenodd" />
        </svg>
    );
};

export default IconFolder;
