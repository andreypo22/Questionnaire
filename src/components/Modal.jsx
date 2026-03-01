export default function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Данные отправлены</p>
        <button onClick={onClose}>Переход на главную</button>
      </div>
    </div>
  );
}
