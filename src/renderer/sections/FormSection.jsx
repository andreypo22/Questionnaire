import { setField as setFieldStart } from "../../features/start/startSlice";
import { setField as setFieldSecond } from "../../features/second/secondSlice";
import { setField as setFieldThird } from "../../features/third/thirdSlice";
import { setField as setFieldFifth } from "../../features/fifth/fifthSlice";
import { useSelector } from "react-redux";

export default function FormSection({ config, state, dispatch }) {
  const showErrors = useSelector((s) => s.ui.showErrors);

  const toggle =
    state.name !== undefined
      ? setFieldStart
      : state.placeOfBirth !== undefined
        ? setFieldSecond
        : state.region !== undefined
          ? setFieldThird
          : state.phoneNumber !== undefined
            ? setFieldFifth
            : null;

  return (
    <div className="field-section">
      {config.map((field) => {
        const invalid = showErrors && !state[field.name];
        const isDate = field.type === "date" || field.type === "month";

        return (
          <div className="field" key={field.name}>
            <input
              id={field.name}
              type={field.type}
              className={invalid && field.required ? "error" : ""}
              value={state[field.name]}
              autoComplete="off"
              max={isDate ? new Date().toISOString().split("T")[0] : undefined}
              onChange={(e) =>
                dispatch(
                  toggle({
                    field: field.name,
                    value: field.onlyDigits
                      ? e.target.value.replace(/\D/g, "")
                      : e.target.value,
                  }),
                )
              }
            />
            <label
              htmlFor={field.name}
              className={state[field.name] ? "filled" : ""}
            >
              {field.title}
            </label>
          </div>
        );
      })}
    </div>
  );
}
