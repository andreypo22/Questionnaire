import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const start = useSelector((s) => s.start);
  const second = useSelector((s) => s.second);
  const third = useSelector((s) => s.third);
  const fourth = useSelector((s) => s.fourth);
  const fifth = useSelector((s) => s.fifth);
  const navigate = useNavigate();

  return (
    <div className="page result">
      <div className="result-title">
        <h1>Проверьте правильность данныx</h1>
        <p>
          Просмотрите все разделы анкеты и убедитесь, что информация указана
          точно. При необxодимости вернитесь и исправьте ошибки. Когда будете
          готовы - подтвердите отправку
        </p>
      </div>
      <div className="result-section">
        <div className="result-header">
          <h3>Основные сведения</h3>
          <button onClick={() => navigate("/")}>Изменить</button>
        </div>

        <div className="result-row">Имя – {start.name}</div>
        <div className="result-row">Фамилия – {start.lastname}</div>
        <div className="result-row">Отчество – {start.surname}</div>
        <div className="result-row">Дата рождения – {start.birthdate}</div>
        <div className="result-row">Пол – {start.gender}</div>

        {Object.entries(start.checks).map(([k, v]) => (
          <div key={k} className="result-row">
            {k === "criminalRecord"
              ? "Судимость"
              : k === "debtsToBailiffs"
                ? "Долги у приставов"
                : k === "activeStatement"
                  ? "Активное заявление на загранпаспорт"
                  : k === "accessToPrivacy"
                    ? "Доступ к секрктности"
                    : null}{" "}
            – {String(v) === "false" ? "Нет" : "Да"}
          </div>
        ))}
      </div>

      <div className="result-section">
        <div className="result-header">
          <h3>Данные паспорта РФ</h3>
          <button onClick={() => navigate("/second")}>Изменить</button>
        </div>
        <div className="result-row">Место рождения – {second.placeOfBirth}</div>
        <div className="result-row">
          Серия и номер – {second.seriesAndNumber}
        </div>
        <div className="result-row">Дата выдачи – {second.dateOfIssue}</div>
        <div className="result-row">
          Код подразделения – {second.departmentCode}
        </div>
        <div className="result-row">Кем выдан – {second.issuedBy}</div>
      </div>

      <div className="result-section">
        <div className="result-header">
          <h3>Адрес</h3>
          <button onClick={() => navigate("/third")}>Изменить</button>
        </div>
        <div className="result-subblock">
          <h4>Регистрация</h4>
          <div className="result-row">Регион – {third.region}</div>
          <div className="result-row">Город – {third.city}</div>
          <div className="result-row">Улица – {third.street}</div>
          <div className="result-row">Дом – {third.houseNumber}</div>
          <div className="result-row">Корпус – {third.caseNumber}</div>
          <div className="result-row">Строение – {third.buildingNumber}</div>
          <div className="result-row">Квартира – {third.apartmentNumber}</div>
          <div className="result-row">
            Дата регистрации – {third.registrationDate}
          </div>
        </div>

        <div className="result-subblock">
          <h4>Фактический</h4>
          <div className="result-row">Регион – {third.factRegion}</div>
          <div className="result-row">Город – {third.factCity}</div>
          <div className="result-row">Улица – {third.factStreet}</div>
          <div className="result-row">Дом – {third.factHouseNumber}</div>
          <div className="result-row">Корпус – {third.factCaseNumber}</div>
          <div className="result-row">
            Строение – {third.factBuildingNumber}
          </div>
          <div className="result-row">
            Квартира – {third.factApartmentNumber}
          </div>
        </div>
      </div>

      <div className="result-section">
        <div className="result-header">
          <h3>Трудовая деятельность</h3>
          <button onClick={() => navigate("/fourth")}>Изменить</button>
        </div>

        {Object.entries(fourth.checks).map(([k, v]) => (
          <div key={k} className="result-row">
            {k === "militaryService"
              ? "Служба в армии"
              : k === "civilService"
                ? "Работа в государственныx органаx"
                : null}{" "}
            – {String(v) === "false" ? "Нет" : "Да"}
          </div>
        ))}

        {fourth.blocks.map((b, i) => (
          <div key={i} className="result-subblock">
            <div className="result-row">Начало работы – {b.startOfWork}</div>
            <div className="result-row">Конец работы – {b.endOfWork}</div>
            <div className="result-row">Должность – {b.jobTitle}</div>
            <div className="result-row">
              Место работы, номер войсковой части – {b.placeOfWork}
            </div>
            <div className="result-row">
              Адрес организации или войсковой части – {b.organizationAddress}
            </div>
          </div>
        ))}
      </div>

      <div className="result-section">
        <div className="result-header">
          <h3>Дополнительная информация</h3>
          <button onClick={() => navigate("/fifth")}>Изменить</button>
        </div>

        {Object.entries(fifth.checks).map(([k, v]) => (
          <div key={k} className="result-row">
            {k === "foreignCitizenship"
              ? "Иностранное гражданство"
              : k === "livingAbroad"
                ? "Проживание за границей"
                : null}{" "}
            – {String(v) === "false" ? "Нет" : "Да"}
          </div>
        ))}

        <div className="result-row">Номер телефона – {fifth.phoneNumber}</div>
        <div className="result-row">Email – {fifth.email}</div>
        <div className="result-row">
          Тип загранпаспорта – {fifth.passportType}
        </div>
      </div>
    </div>
  );
}
