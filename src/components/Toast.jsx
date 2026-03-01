import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../features/ui/uiSlice";

export default function Toast() {
  const dispatch = useDispatch();
  const toast = useSelector((s) => s.ui.toast);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => dispatch(hideToast()), 4000);
    return () => clearTimeout(id);
  }, [toast, dispatch]);

  if (!toast) return null;

  return <div className={`toast ${toast.type}`}>{toast.text}</div>;
}
