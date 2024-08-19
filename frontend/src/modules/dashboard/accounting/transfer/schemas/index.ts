import * as yup from "yup";

export const transferSchema = yup.object({
    fromAccountId: yup.string().required("From Account is required!"),
    toAccountId: yup.string().required("To Account is required!"),
    amount: yup
        .string()
        .required("Amount is required!")
        .matches(/^\d+(\.\d{1,2})?$/, "Invalid amount format"),
    description: yup
        .string()
        .required("Description is required!")
        .min(2, "Description must be at least 2 characters long.")
        .max(100, "Description must be less than 100 characters long."),
});
