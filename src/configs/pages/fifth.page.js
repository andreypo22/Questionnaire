import {
  fifthFormConfig,
  positionButtonsConfig,
} from "../forms/fifthForm.config";

export const fifthPageConfig = {
  slice: "fifth",
  head: "Дополнительная информация",
  description:
    "Заполните дополнительные данные, включая контакты и тип загранпаспорта, который вы xотите получить. Эта информация завершает анкету.",
  sections: [
    {
      type: "checkbox",
      config: fifthFormConfig.checkboxes,
      head: "Осталось чуть-чуть",
    },
    {
      type: "form",
      config: fifthFormConfig.fields,
      head: "Контакты",
    },
    {
      type: "buttons",
      config: positionButtonsConfig,
      head: "Тип загранпаспорта",
    },
  ],
};
