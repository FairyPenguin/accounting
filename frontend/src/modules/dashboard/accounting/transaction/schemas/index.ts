import * as yup from "yup";

export const transactionSchema = yup.object({
    accountId: yup.string().required("Account ID is required!"),
    journalEntryId: yup.string().required("Journal Entry ID is required!"),
    type: yup.string().required("Type is required!"),
    amount: yup
        .number()
        .required("Amount is required!")
        .positive("Amount must be a positive number")
        .max(9999999999, "Amount exceeds the maximum limit")
        .typeError("Amount must be a number"),
    description: yup
        .string()
        .required("Description is required!")
        .min(2, "Description must be at least 2 characters long.")
        .max(100, "Description must be less than 100 characters long."),
});
