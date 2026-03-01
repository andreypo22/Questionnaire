export const thirdFormConfig = {
  fields: [
    {
      name: "region",
      title: "Регион",
      type: "text",
      required: true,
    },
    {
      name: "city",
      title: "Город",
      type: "text",
      required: true,
    },
    {
      name: "street",
      title: "Улица",
      type: "text",
      required: true,
    },
    {
      name: "houseNumber",
      title: "Дом",
      type: "text",
      required: true,
      onlyDigits: true,
    },
    {
      name: "caseNumber",
      title: "Корпус",
      type: "text",
      onlyDigits: true,
    },
    {
      name: "buildingNumber",
      title: "Строение",
      type: "text",
      onlyDigits: true,
    },
    {
      name: "apartmentNumber",
      title: "Квартира",
      type: "text",
      required: true,
      onlyDigits: true,
    },
    {
      name: "registrationDate",
      title: "Дата регистрации",
      type: "date",
      required: true,
    },
  ],

  factFields: [
    {
      name: "factRegion",
      title: "Регион",
      type: "text",
      required: true,
    },
    {
      name: "factCity",
      title: "Город",
      type: "text",
      required: true,
    },
    {
      name: "factStreet",
      title: "Улица",
      type: "text",
      required: true,
    },
    {
      name: "factHouseNumber",
      title: "Дом",
      type: "text",
      required: true,
      onlyDigits: true,
    },
    {
      name: "factCaseNumber",
      title: "Корпус",
      type: "text",
      onlyDigits: true,
    },
    {
      name: "factBuildingNumber",
      title: "Строение",
      type: "text",
      onlyDigits: true,
    },
    {
      name: "factApartmentNumber",
      title: "Квартира",
      type: "text",
      required: true,
      onlyDigits: true,
    },
  ],
};
