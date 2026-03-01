import { configureStore } from "@reduxjs/toolkit";
import startReducer from "../features/start/startSlice";
import secondReducer from "../features/second/secondSlice";
import thirdReducer from "../features/third/thirdSlice";
import fourthReducer from "../features/fourth/fourthSlice";
import fifthReducer from "../features/fifth/fifthSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    start: startReducer,
    second: secondReducer,
    third: thirdReducer,
    fourth: fourthReducer,
    fifth: fifthReducer,
    ui: uiReducer,
  },
});
