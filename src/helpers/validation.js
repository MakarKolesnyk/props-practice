import * as Yup from "yup";

const nameSchema = Yup.string().trim().min(3).max(10);
const emailSchema = Yup.string()
  .trim()
  .email("Invalid email format")
  .required("Email is required");

const passwordSchema = Yup.string().min(6).required("Password is required");

export const registerSchema = Yup.object({
  firstName: nameSchema.required("First name is required"),
  lastName: nameSchema.required("Last name is required"),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], `Passwords must match`)
    .required("Confirm password is required"),
});

export const loginSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
});
