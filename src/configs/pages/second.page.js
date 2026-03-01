import { secondFormConfig } from "../forms/secondForm.config";

export const secondPageConfig = {
  slice: "second",
  head: "Данные паспорта РФ",
  description:
    "Введите информацию из вашего внутреннего паспорта. На основании этих данных формируется официальная анкета и проверяется ваша личность",
  sections: [
    { type: "form", config: secondFormConfig.fields, head: "Данные паспорта" },
  ],
};
