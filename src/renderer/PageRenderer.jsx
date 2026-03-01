import { useDispatch, useSelector } from "react-redux";
import FormSection from "./sections/FormSection";
import CheckboxSection from "./sections/CheckboxSection";
import ButtonSection from "./sections/ButtonSection";
import DynamicBlockSection from "./sections/DynamicBlockSection";
import { setField } from "../features/third/thirdSlice";
import AddressCheckbox from "../components/AddressCheckbox";

export default function PageRenderer({ pageConfig }) {
  const dispatch = useDispatch();
  const state = useSelector((s) => s[pageConfig.slice]);

  const onChange = (e) => {
    const factRegion = document.getElementById("factRegion").nextElementSibling;
    const factCity = document.getElementById("factCity").nextElementSibling;
    const factStreet = document.getElementById("factStreet").nextElementSibling;
    const factHouseNumber =
      document.getElementById("factHouseNumber").nextElementSibling;
    const factCaseNumber =
      document.getElementById("factCaseNumber").nextElementSibling;
    const factBuildingNumber =
      document.getElementById("factBuildingNumber").nextElementSibling;
    const factApartmentNumber = document.getElementById(
      "factApartmentNumber",
    ).nextElementSibling;

    const factAddressArray = [
      factRegion,
      factCity,
      factStreet,
      factHouseNumber,
      factCaseNumber,
      factBuildingNumber,
      factApartmentNumber,
    ];

    if (e.target.checked) {
      dispatch(
        setField({
          field: "factRegion",
          value: state.region,
        }),
      );
      dispatch(
        setField({
          field: "factCity",
          value: state.city,
        }),
      );
      dispatch(
        setField({
          field: "factStreet",
          value: state.street,
        }),
      );
      dispatch(
        setField({
          field: "factHouseNumber",
          value: state.houseNumber,
        }),
      );
      dispatch(
        setField({
          field: "factCaseNumber",
          value: state.caseNumber,
        }),
      );
      dispatch(
        setField({
          field: "factBuildingNumber",
          value: state.buildingNumber,
        }),
      );
      dispatch(
        setField({
          field: "factApartmentNumber",
          value: state.apartmentNumber,
        }),
      );

      factAddressArray.forEach((elem) => elem.classList.add("filled"));
    } else {
      dispatch(
        setField({
          field: "factRegion",
          value: "",
        }),
      );
      dispatch(
        setField({
          field: "factCity",
          value: "",
        }),
      );
      dispatch(
        setField({
          field: "factStreet",
          value: "",
        }),
      );
      dispatch(
        setField({
          field: "factHouseNumber",
          value: "",
        }),
      );
      dispatch(
        setField({
          field: "factCaseNumber",
          value: "",
        }),
      );
      dispatch(
        setField({
          field: "factBuildingNumber",
          value: "",
        }),
      );
      dispatch(
        setField({
          field: "factApartmentNumber",
          value: "",
        }),
      );

      factAddressArray.forEach((elem) => elem.classList.remove("filled"));
    }
  };

  return (
    <div className="page">
      <h1 className="page-title">{pageConfig.head}</h1>
      <p className="page-descr">{pageConfig.description}</p>
      {pageConfig.sections.map((section, i) => {
        switch (section.type) {
          case "form":
            return (
              <div className="section" key={i}>
                <div className="section-header">
                  {section.head && <h2>{section.head}</h2>}
                  {section.checkboxFactAddress && (
                    <AddressCheckbox onChange={onChange} />
                  )}
                </div>
                <FormSection
                  key={i}
                  {...section}
                  state={state}
                  dispatch={dispatch}
                />
              </div>
            );
          case "checkbox":
            return (
              <div key={i}>
                <div className="section-header">
                  {section.head && <h2>{section.head}</h2>}
                </div>
                <CheckboxSection
                  key={i}
                  {...section}
                  state={state}
                  dispatch={dispatch}
                />
              </div>
            );
          case "buttons":
            return (
              <div key={i}>
                <div className="section-header">
                  {section.head && <h2>{section.head}</h2>}
                </div>
                <ButtonSection key={i} state={state} dispatch={dispatch} />
              </div>
            );
          case "dynamicBlocks":
            return (
              <div key={i}>
                <div className="section-header">
                  {section.head && <h2>{section.head}</h2>}
                </div>
                <DynamicBlockSection
                  key={i}
                  {...section}
                  state={state}
                  dispatch={dispatch}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
