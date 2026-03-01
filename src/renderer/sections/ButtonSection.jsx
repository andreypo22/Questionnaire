import { setPosition as startSetPosition } from "../../features/start/startSlice";
import { setPosition as fifthSetPosition } from "../../features/fifth/fifthSlice";
import { positionButtonsConfig as startPositionButtonsConfig } from "../../configs/forms/startForm.config";
import { positionButtonsConfig as fifthPositionButtonsConfig } from "../../configs/forms/fifthForm.config";
import { resetValidation } from "../../features/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonSection({ state }) {
  const dispatch = useDispatch();
  const showErrors = useSelector((s) => s.ui.showErrors);
  const toggle =
    state.gender !== undefined
      ? startSetPosition
      : state.passportType !== undefined
        ? fifthSetPosition
        : null;

  const hasError =
    state.gender !== undefined
      ? showErrors && !state.gender
      : state.passportType !== undefined
        ? showErrors && !state.passportType
        : null;

  const positionConfig =
    state.gender !== undefined
      ? startPositionButtonsConfig
      : state.passportType !== undefined
        ? fifthPositionButtonsConfig
        : null;

  return (
    <div className="button-section">
      <div className="button-group">
        {positionConfig.map((btn) => {
          const isActive =
            state.gender !== undefined
              ? state.gender === btn
              : state.passportType !== undefined
                ? state.passportType === btn
                : null;

          return (
            <button
              key={btn}
              className={[
                isActive ? "active" : "",
                hasError ? "error" : "",
              ].join(" ")}
              onClick={() => {
                dispatch(resetValidation());
                dispatch(toggle(btn));
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}
