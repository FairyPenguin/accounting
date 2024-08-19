import * as yup from "yup";

export const accountSchema = yup.object({
    name: yup
        .string()
        .required("Name is required!")
        .min(2, "Name must be at least 2 characters long.")
        .max(50, "Name must be less than 50 characters long."),
    description: yup
        .string()
        .required("Description is required!")
        .min(2, "Description must be at least 2 characters long.")
        .max(100, "Description must be less than 100 characters long."),
    type: yup.string().required("Type is required!"),
    balance: yup
        .string()
        .required("Balance is required!")
        .matches(/^\d+(\.\d{1,2})?$/, "Invalid balance format"),
    parentId: yup
        .number()
        .nullable()
        .default(null)
        .transform((value, originalValue) => {
            return originalValue === "" ? null : value;
        }),
});
