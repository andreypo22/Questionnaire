import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Toast from "./components/Toast";
import StartPage from "./pages/StartPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <div className="layout">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/fifth" element={<FifthPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
      <Sidebar />
      <Toast />
    </div>
  );
}
