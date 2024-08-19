import * as yup from "yup";

export const LanguageSchema = yup.object({
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
    ISOCode2L: yup
        .string()
        .required("2-letter ISO code is required!")
        .length(2, "2-letter ISO code must be exactly 2 characters."),
    ISOCode3L: yup
        .string()
        .required("3-letter ISO code is required!")
        .length(3, "3-letter ISO code must be exactly 3 characters."),
});
