export const startFormConfig = {
  fields: [
    { name: "name", title: "Имя", type: "text", required: true },
    { name: "lastname", title: "Фамилия", type: "text", required: true },
    { name: "surname", title: "Отчество", type: "text", required: true },
    { name: "birthdate", title: "Дата рождения", type: "date", required: true },
  ],

  checkboxes: [
    {
      name: "criminalRecord",
      title: "Судимость",
      label:
        "Есть ли у вас действующая или непогашенная судимость. Погашенные судимости не учитываются",
    },
    {
      name: "debtsToBailiffs",
      title: "Долги у приставов",
      label:
        "Есть ли у вас непогашенные задолженности, находящиеся на исполнении у ФССП. Это может повлиять на оформление загранпаспорта",
    },
    {
      name: "activeStatement",
      title: "Активное заявление на загранпаспорт",
      label:
        "Вы уже подавали заявление на загранпаспорт и оно всё ещё находится в обработке? Если да — укажите",
    },
    {
      name: "accessToPrivacy",
      title: "Доступ к секретности",
      label:
        "Был ли у вас когда-либо допуск к секретной информации или работа в режимных организациях. Это влияет на срок оформления паспорта",
    },
  ],
};

export const positionButtonsConfig = ["Мужской", "Женский"];
