import * as yup from "yup";

const transactionSchema = yup.object().shape({
    accountId: yup.number().required("Account ID is required!").typeError("Account ID must be a number"),
    type: yup.string().oneOf(["DEBIT", "CREDIT"], "Invalid type").required("Type is required!"),
    amount: yup
        .number()
        .required("Amount is required!")
        .typeError("Amount must be a number")
        .positive("Amount must be a positive number")
        .max(9999999999, "Amount exceeds the maximum limit"),
});

export const journalEntrySchema = yup.object().shape({
    description: yup
        .string()
        .required("Description is required!")
        .min(2, "Description must be at least 2 characters long.")
        .max(100, "Description must be less than 100 characters long."),
    transactions: yup
        .array()
        .of(transactionSchema)
        .min(2, "There must be at least two transactions.")
        .max(2, "There must be exactly two transactions."),
});
