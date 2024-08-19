import * as yup from "yup";

export const CalculationUnitSchema = yup.object({
    name: yup
        .string()
        .required("Name is required!")
        .min(2, "Name must be at least 2 characters long.")
        .max(50, "Name must be less than 50 characters long."),
    symbol: yup
        .string()
        .required("Symbol is required!")
        .min(1, "Symbol must be at least 1 character long.")
        .max(10, "Symbol must be less than 10 characters long."),
    exchangeRatio: yup
        .string()
        .required("Exchange ratio is required!")
        .matches(/^(0|([1-9]\d*))(\.\d+)?$/, "Exchange ratio must be a positive number."),
});
