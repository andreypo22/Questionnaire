export const secondFormConfig = {
  fields: [
    {
      name: "placeOfBirth",
      title: "Место рождения",
      type: "text",
      required: true,
    },
    {
      name: "seriesAndNumber",
      title: "Серия и номер",
      type: "text",
      required: true,
      onlyDigits: true,
    },
    { name: "dateOfIssue", title: "Дата выдачи", type: "date", required: true },
    {
      name: "departmentCode",
      title: "Код подразделения",
      type: "text",
      required: true,
      onlyDigits: true,
    },
    {
      name: "issuedBy",
      title: "Кем выдвн",
      type: "text",
      required: true,
    },
  ],
};
