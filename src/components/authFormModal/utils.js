export const RegisterForm = [
  {
    label: "First Name",
    name: "firstName",
    validators: ["required"],
    errorMessages: ["Please enter your first name."],
  },
  {
    label: "Last Name",
    name: "lastName",
    validators: ["required"],
    errorMessages: ["Please enter your last name."],
  },
  {
    label: "Email",
    name: "email",
    validators: ["required", "isEmail"],
    errorMessages: [
      "Please enter your valid email address.",
      "Please enter your valid email address.",
    ],
  },
  {
    label: "Password",
    name: "password",
    validators: ["required"],
    errorMessages: ["Please enter a password."],
  },
];

export const SignInForm = [
  {
    label: "Email",
    name: "email",
    validators: ["required", "isEmail"],
    errorMessages: [
      "Please enter your valid email address.",
      "Please enter your valid email address.",
    ],
  },
  {
    label: "Password",
    name: "password",
    validators: ["required"],
    errorMessages: ["Please enter a password."],
  },
];
