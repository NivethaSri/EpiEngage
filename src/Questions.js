// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    layout: {
      groups: [
        {
          id: "1",
          name: "General Health",
          subgroups: [
            {
              id: "sb1",
              name: "Member Information",
              sections: [
                {
                  questionid: 8,
                  question: "What kind of Assessment is this?",
                  type: "singleselect",
                  options: [
                    "First Health Assessment",
                    "Annual Health Assessment",
                  ],
                  validation: [{ isrequired: "true" }],
                },
                {
                  questionid: 9,
                  question: "Race/Ethnicity?",
                  type: "singleselect",
                  options: ["White", "Black", "Brown", "etc.."],
                  validation: [{ isrequired: "true" }],
                },

                {
                  questionid: 10,
                  question: "Do you speak English ?",
                  type: "Button",
                  options: ["Yes", "No"],
                  validation: [{ isrequired: "true" }],
                },

                {
                  questionid: 11,
                  question: "Can you read and understand English ?",
                  type: "Button",
                  options: ["Yes", "No"],
                  validation: [{ isrequired: "true" }],
                },

                {
                  questionid: 11,
                  question: "What is your primary language?",
                  type: "singleselect",
                  options: [
                    "English",
                    "Spanish",
                    "Cantonese, Mandarin or other Chinese dialect",
                    "Portuguese",
                    "Vietnamese",
                    "Korean",
                    "French or French Creole",
                    "Filipino",
                    "Arabic",
                    "Other",
                  ],

                  validation: [{ isrequired: "true" }],
                },

                {
                  questionid: 11,
                  question:
                    "If English is not your primary language does your PCP / their office staff speak your primary language or offer translator services?  ",
                  type: "Button",
                  options: ["Yes", "No"],
                  validation: [{ isrequired: "true" }],
                },

                {
                  questionid: 11,
                  question:
                    "Do you speak a language other than English at home?",
                  type: "Button",
                  options: ["Yes", "No"],
                  validation: [{ isrequired: "true" }],
                },
              ],
            },

            {
              id: "sb2",
              name: "Veternan Health",
              sections: [],
            },

            {
              id: "sb3",
              name: "Status / Education",
              sections: [],
            },

            {
              id: "sb4",
              name: "Medical Provider Information",
              sections: [],
            },

            {
              id: "sb5",
              name: "Emergency Contact",
              sections: [],
            },

            {
              id: "sb6",
              name: "Living Arrangements / Community / Transportation",
              sections: [],
            },

            {
              id: "sb7",
              name: "Connectivity / Tele-medicine",
              sections: [],
            },

            {
              id: "sb8",
              name: "Advance Directive (Ad) Discussion",
              sections: [],
            },

            {
              id: "sb9",
              name: "Family History",
              sections: [],
            },

            {
              id: "sb10",
              name: "Social History",
              sections: [],
            },

            {
              id: "sb11",
              name: "Devices/ Home Support",
              sections: [],
            },

            {
              id: "sb12",
              name: "Home Safety",
              sections: [],
            },
          ],
        },
        {
          id: "2",
          name: "Past Medical History",
          subgroups: [],
        },

        {
          id: "3",
          name: "Quality",
          subgroups: [],
        },
        {
          id: "4",
          name: "Review of Systems",
          subgroups: [],
        },
        {
          id: "5",
          name: "Physical Exam",
          subgroups: [],
        },
        {
          id: "6",
          name: "Diagnostic Test",
          subgroups: [],
        },
        {
          id: "7",
          name: "Assessment and Diagnosis",
          subgroups: [],
        },
        {
          id: "8",
          name: "REGCMS",
          subgroups: [],
        },
      ],
    },
  },
];
