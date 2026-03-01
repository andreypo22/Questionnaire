export default function AddressCheckbox({ onChange }) {
  return (
    <label>
      Совпадает с регистрацией
      <input onChange={onChange} type="checkbox" />
    </label>
  );
}
