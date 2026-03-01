import { thirdFormConfig } from "../forms/thirdForm.config";

export const thirdPageConfig = {
  slice: "third",
  head: "Адрес",
  description:
    "Укажите адрес вашей постоянной регистрации по паспорту. Заполняйте данные так, как они указаны в документах",
  sections: [
    {
      type: "form",
      config: thirdFormConfig.fields,
      head: "Регистрация",
    },
    {
      type: "form",
      config: thirdFormConfig.factFields,
      head: "Фактический",
      checkboxFactAddress: true,
    },
  ],
};
