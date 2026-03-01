export const fourthFormConfig = {
  checkboxes: [
    {
      name: "militaryService",
      title: "Служба в армии",
      label: "Сообщите, проходили ли вы военную службу за последние 10 лет",
    },
    {
      name: "civilService",
      title: "Работа в государственных органах",
      label:
        "Укажите, работали ли вы в государственных структурах за последние 10 лет",
    },
  ],
};

export const dynamicBlockConfig = [
  {
    name: "startOfWork",
    title: "Начало работы",
    type: "month",
    required: true,
  },
  { name: "endOfWork", title: "Конец работы", type: "month", required: true },
  { name: "jobTitle", title: "Должность", type: "text", required: true },
  {
    name: "placeOfWork",
    title: "Место работы, номер войсковой части",
    type: "text",
    required: true,
  },
  {
    name: "organizationAddress",
    title: "Адрес организации или войсковой части",
    type: "text",
    required: true,
  },
];
