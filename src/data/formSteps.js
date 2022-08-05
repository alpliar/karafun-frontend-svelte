const formSteps = [
  {
    id: 1,
    title: "What kind of business <br /> are you starting/running ?",
    progression: 15,
    choices: [
      {
        label: "Private Suites Karaoke Box",
        value: "one",
      },
      {
        label: "Entertainment Complex (Bowling, Arcade etc)",
        value: "two",
      },
      {
        label: "Hospitality (hotels, restaurant chains)",
        value: "three",
      },
      {
        label: "Camping Site",
        value: "four",
      },
      {
        label: "DJ & Rental Services",
        value: "five",
      },
      {
        label: "I’xm a DJ/KJ myself",
        value: "six",
      },
      {
        label: "Other",
        value: "seven",
      },
    ],
  },
  {
    id: 2,
    title: "When are you opening <br />your venue?",
    progression: 50,
    choices: [
      {
        label: "In more than 6 months",
        value: "one",
      },
      {
        label: "In 3 to 6 months",
        value: "two",
      },
      {
        label: "In less than 3 months",
        value: "three",
      },
      {
        label: "I have already opened",
        value: "four",
      },
    ],
  },
];

export default formSteps;
