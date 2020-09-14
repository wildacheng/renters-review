export const Form = [
  {
    label: "Title",
    name: "title",
    validators: ["required"],
    errorMessages: ["Please enter a title."],
  },
  {
    label: "Review",
    name: "review",
    validators: ["required"],
    errorMessages: ["Please enter your review."],
    rows: 5
  },
  {
    label: "Name",
    name: "name",
    validators: ["required"],
    errorMessages: [
      "Please enter your name.",
    ],
  }
];
