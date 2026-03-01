export const fifthFormConfig = {
  checkboxes: [
    {
      name: "foreignCitizenship",
      title: "Получали ли гражданство други стран",
      label: "Есть ли у вас есть или было другое гражданство - активируйте",
    },
    {
      name: "livingAbroad",
      title: "Проживали ли за границей более 6 месяцев",
      label:
        "Сообщите, если вы наодились за пределами РФ непрерывно более полугода за последние 10 лет",
    },
  ],

  fields: [
    {
      name: "phoneNumber",
      title: "Номер телефона",
      type: "text",
      required: true,
      onlyDigits: true,
    },
    {
      name: "email",
      title: "Ваш email",
      type: "text",
      required: true,
    },
  ],
};

export const positionButtonsConfig = [
  "Биометрический (10 лет)",
  "Старого образца (5 лет)",
];
