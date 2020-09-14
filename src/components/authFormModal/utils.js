export const RegisterForm = [
  {
    label: "First Name",
    name: "firstName",
    validators: ["required"],
    errorMessages: ["Please enter your first name."],
    type: "input"
  },
  {
    label: "Last Name",
    name: "lastName",
    validators: ["required"],
    errorMessages: ["Please enter your last name."],
    type: "input"
  },
  {
    label: "Email",
    name: "email",
    validators: ["required", "isEmail"],
    errorMessages: [
      "Please enter your valid email address.",
      "Please enter your valid email address.",
    ],
    type: "input"
  },
  {
    label: "Password",
    name: "password",
    validators: ["required"],
    errorMessages: ["Please enter a password."],
    type: "password"
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
    type: "input"
  },
  {
    label: "Password",
    name: "password",
    validators: ["required"],
    errorMessages: ["Please enter a password."],
    type: "password"
  },
];
