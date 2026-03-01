import { toggleCheck as toggleStart } from "../../features/start/startSlice";
import { toggleCheck as toggleFourth } from "../../features/fourth/fourthSlice";
import { toggleCheck as toggleFifth } from "../../features/fifth/fifthSlice";

export default function CheckboxSection({ config, state, dispatch }) {
  const toggle =
    state.checks.criminalRecord !== undefined
      ? toggleStart
      : state.checks.militaryService !== undefined
        ? toggleFourth
        : state.checks.foreignCitizenship !== undefined
          ? toggleFifth
          : null;

  return (
    <div className="check-section">
      {config.map((cb) => (
        <div className="check" key={cb.name}>
          <h3>{cb.title}</h3>
          <label>
            <input
              type="checkbox"
              checked={state.checks[cb.name]}
              onChange={() => dispatch(toggle(cb.name))}
            />
            {cb.label}
          </label>
        </div>
      ))}
    </div>
  );
}
