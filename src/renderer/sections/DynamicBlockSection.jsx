import {
  updateBlock,
  addBlock,
  removeBlock,
} from "../../features/fourth/fourthSlice";
import { useSelector } from "react-redux";

export default function DynamicBlockSection({ config, state, dispatch }) {
  const { showErrors, touchedBlocksCount } = useSelector((s) => s.ui);

  return (
    <div className="dynamicBlock-section">
      {state.blocks.map((block, index) => (
        <div key={block.id} className="block">
          {index > 0 && (
            <button
              type="button"
              className="remove-block"
              onClick={() => dispatch(removeBlock(block.id))}
            >
              ✕
            </button>
          )}
          {config.map((f) => {
            const shouldValidate = showErrors && index < touchedBlocksCount;

            const invalid = shouldValidate && !block[f.name];

            return (
              <div className="field" key={f.name}>
                <input
                  id={`${block.id}-${f.name}`}
                  type={f.type}
                  key={f.name}
                  className={invalid ? "error" : ""}
                  value={block[f.name]}
                  onChange={(e) =>
                    dispatch(
                      updateBlock({
                        id: block.id,
                        field: f.name,
                        value: e.target.value,
                      }),
                    )
                  }
                />
                <label
                  htmlFor={`${block.id}-${f.name}`}
                  className={state.blocks[index][f.name] ? "filled" : ""}
                >
                  {f.title}
                </label>
              </div>
            );
          })}
        </div>
      ))}

      <button className="add-block" onClick={() => dispatch(addBlock())}>
        + Добавить
      </button>
    </div>
  );
}
