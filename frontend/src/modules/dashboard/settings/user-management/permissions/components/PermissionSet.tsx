interface PermissionSetProps {
    operation: string;
}

export const PermissionSet: React.FC<PermissionSetProps> = ({ operation }) => {
    return (
        <div className={`flex items-center justify-between py-2`}>
            <span className={`text-sm`}>{operation}</span>
        </div>
    );
};
