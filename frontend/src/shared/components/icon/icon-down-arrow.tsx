interface IconDownArrowProps {
    className?: string;
}

export const IconDownArrow: React.FC<IconDownArrowProps> = ({ className }) => {
    return (
        <svg
            className={`pointer-events-none ms-3 h-3.5 w-3.5 ${className}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
        >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
            />
        </svg>
    );
};
