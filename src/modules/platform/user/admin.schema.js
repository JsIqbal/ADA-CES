import { string, object, ref } from "yup";

export const loginSchema = object().shape({
    email: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long."),
    password: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long.")
        .max(25,"This field minimum 25 character long."),
});

export const registarSchema = object().shape({
  email: string()
    .max(100, "This field must be at most 100 characters long.")
    .required("This field must not be empty."),
  password: string()
    .min(8, "This field must be at least 8 characters long.")
    .max(50, "This field must be at most 50 characters long.")
    .required("This  field must not be empty."),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Password must match.")
    .required("This  field must not be empty."),
});