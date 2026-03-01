import {
  startFormConfig,
  positionButtonsConfig,
} from "../forms/startForm.config";

export const startPageConfig = {
  slice: "start",
  head: "Основные сведения",
  description:
    "Заполните базовую информацию о себе. Эти данные нужны для первичной проверки и определения возможности оформления загранпаспорта. Ответы никуда не передаются, кроме анкеты.",
  sections: [
    {
      type: "form",
      config: startFormConfig.fields,
      head: "Общая информация",
    },
    { type: "buttons", config: positionButtonsConfig, head: "Выберите пол" },
    {
      type: "checkbox",
      config: startFormConfig.checkboxes,
      head: "Дополнительные сведения",
    },
  ],
};
