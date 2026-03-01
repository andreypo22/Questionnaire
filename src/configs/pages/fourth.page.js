import {
  dynamicBlockConfig,
  fourthFormConfig,
} from "../forms/fourthForm.config";

export const fourthPageConfig = {
  slice: "fourth",
  head: "Трудовая деятельность",
  description:
    "Укажите вашу работу, службу или обучение за последние 10 лет без перерывов. Это обязательная часть анкеты, требуемая миграционными органами",
  sections: [
    {
      type: "checkbox",
      config: fourthFormConfig.checkboxes,
      head: "Служба в течении 10 лет",
    },
    {
      type: "dynamicBlocks",
      config: dynamicBlockConfig,
      head: "Трудовая деятельность",
    },
  ],
};
