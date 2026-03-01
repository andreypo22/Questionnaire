import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  showValidation,
  resetValidation,
  completeStep,
  startSending,
  finishSending,
  showToast,
  resetAll,
} from "../features/ui/uiSlice";
import { resetStart } from "../features/start/startSlice";
import { resetSecond } from "../features/second/secondSlice";
import { resetThird } from "../features/third/thirdSlice";
import { resetFourth } from "../features/fourth/fourthSlice";
import { resetFifth } from "../features/fifth/fifthSlice";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_SERVER_URL;

  const start = useSelector((s) => s.start);
  const second = useSelector((s) => s.second);
  const third = useSelector((s) => s.third);
  const fourth = useSelector((s) => s.fourth);
  const fifth = useSelector((s) => s.fifth);
  const ui = useSelector((s) => s.ui);

  const startValid =
    start.name &&
    start.lastname &&
    start.surname &&
    start.birthdate &&
    start.gender;

  const secondValid =
    second.placeOfBirth &&
    second.seriesAndNumber &&
    second.dateOfIssue &&
    second.departmentCode &&
    second.issuedBy;

  const thirdValid =
    third.region &&
    third.city &&
    third.street &&
    third.houseNumber &&
    third.apartmentNumber &&
    third.registrationDate &&
    third.factRegion &&
    third.factCity &&
    third.factStreet &&
    third.factHouseNumber &&
    third.factApartmentNumber;

  const fourthValid = fourth.blocks.every(
    (b) =>
      b.startOfWork &&
      b.endOfWork &&
      b.jobTitle &&
      b.placeOfWork &&
      b.organizationAddress,
  );

  const fifthValid = fifth.phoneNumber && fifth.email && fifth.passportType;
  const isResult = location.pathname === "/result";

  const next = () => {
    if (location.pathname === "/") {
      if (!startValid) {
        dispatch(showValidation());
        return;
      }

      dispatch(completeStep("start"));
      dispatch(resetValidation());
      navigate("/second");
    }

    if (location.pathname === "/second") {
      if (!secondValid) {
        dispatch(showValidation());
        return;
      }

      dispatch(completeStep("second"));
      dispatch(resetValidation());
      navigate("/third");
    }

    if (location.pathname === "/third") {
      if (!thirdValid) {
        dispatch(showValidation());
        return;
      }

      dispatch(completeStep("third"));
      dispatch(resetValidation());
      navigate("/fourth");
    }

    if (location.pathname === "/fourth") {
      if (!fourthValid) {
        dispatch(showValidation(fourth.blocks.length));
        return;
      }

      dispatch(completeStep("fourth"));
      dispatch(resetValidation());
      navigate("/fifth");
    }

    if (location.pathname === "/fifth") {
      if (!fifthValid) {
        dispatch(showValidation());
        return;
      }

      dispatch(completeStep("fifth"));
      dispatch(resetValidation());
      navigate("/result");
    }
  };

  const send = async () => {
    dispatch(startSending());

    const payload = { start, second, third, fourth, fifth };

    dispatch(resetStart());
    dispatch(resetSecond());
    dispatch(resetThird());
    dispatch(resetFourth());
    dispatch(resetFifth());
    dispatch(resetAll());

    dispatch(
      showToast({
        type: "success",
        text: "Данные отправлены",
      }),
    );

    try {
      await fetch(`${URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      dispatch(
        showToast({
          type: "error",
          text: "Ошибка отправки",
        }),
      );
    } finally {
      dispatch(finishSending());
      navigate("/");
    }
  };

  const go = (path) => {
    dispatch(resetValidation());
    navigate(path);
  };

  return (
    <aside className="sidebar right">
      <button
        className={location.pathname === "/" ? "active" : ""}
        onClick={() => go("/")}
      >
        Основные сведения
      </button>

      <button
        disabled={!ui.completedSteps.start}
        className={location.pathname === "/second" ? "active" : ""}
        onClick={() => go("/second")}
      >
        Данные паспорта РФ
      </button>

      <button
        disabled={!ui.completedSteps.second}
        className={location.pathname === "/third" ? "active" : ""}
        onClick={() => go("/third")}
      >
        Адрес
      </button>

      <button
        disabled={!ui.completedSteps.third}
        className={location.pathname === "/fourth" ? "active" : ""}
        onClick={() => go("/fourth")}
      >
        Трудовая деятельность
      </button>

      <button
        disabled={!ui.completedSteps.fourth}
        className={location.pathname === "/fifth" ? "active" : ""}
        onClick={() => go("/fifth")}
      >
        Дополнительная информация
      </button>

      <button
        disabled={!ui.completedSteps.fifth}
        className={location.pathname === "/result" ? "active" : ""}
        onClick={() => go("/result")}
      >
        Проверка данныx
      </button>

      {/* ACTION BUTTON */}
      {!isResult ? (
        <button className="next-btn" onClick={next}>
          Продолжить
        </button>
      ) : (
        <button className="send-btn" onClick={send} disabled={ui.sending}>
          {ui.sending ? "Sending..." : "Отправить"}
        </button>
      )}
    </aside>
  );
}
