import * as yup from "yup";
import { Gender } from "../enums/gender.enum";

export const userSchema = yup.object({
    firstName: yup
        .string()
        .required("First name is required!")
        .min(2, "First name must be at least 2 characters long.")
        .max(50, "First name must be less than 50 characters long."),
    lastName: yup
        .string()
        .required("Last name is required!")
        .min(2, "Last name must be at least 2 characters long.")
        .max(50, "Last name must be less than 50 characters long."),
    email: yup
        .string()
        .email("Email is invalid!")
        .required("Email is required!")
        .max(100, "Email must be less than 100 characters long."),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters long.")
        .max(50, "Password must be less than 50 characters long.")
        .required("Password is required!"),
    gender: yup.mixed().oneOf([...Object.values(Gender)], "Invalid gender value"),
    address: yup.string(),
    phone: yup.string(),
    role: yup.string().required("Role is required!"),
});
