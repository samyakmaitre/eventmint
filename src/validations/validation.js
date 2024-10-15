import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Email format invalid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registerValidation = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
      .required("Confirm password is required"),
  });
