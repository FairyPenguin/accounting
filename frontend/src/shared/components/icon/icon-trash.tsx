import { FC } from 'react';

interface IconTrashProps {
    className?: string;
}

const IconTrash: FC<IconTrashProps> = ({ className }) => {
    return (
        <svg className="h-7 w-7 text-gray-400 hover:text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
        </svg>
    );
};

export default IconTrash;
