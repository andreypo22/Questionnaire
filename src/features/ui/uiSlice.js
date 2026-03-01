import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showErrors: false,
    touchedBlocksCount: 0,
    completedSteps: {
      start: false,
      second: false,
      third: false,
      fourth: false,
    },
    sending: false,
    toast: null,
  },
  reducers: {
    showValidation: (state, action) => {
      state.showErrors = true;
      if (typeof action.payload === "number") {
        state.touchedBlocksCount = action.payload;
      }
    },
    resetValidation: (state) => {
      state.showErrors = false;
      state.touchedBlocksCount = 0;
    },
    completeStep: (state, action) => {
      state.completedSteps[action.payload] = true;
    },
    resetAll: (state) => {
      state.showErrors = false;
      state.touchedBlocksCount = 0;
      state.completedSteps = {
        start: false,
        second: false,
        third: false,
        fourth: false,
      };
    },
    startSending: (state) => {
      state.sending = true;
    },
    finishSending: (state) => {
      state.sending = false;
    },
    showToast: (state, action) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
  },
});

export const {
  showValidation,
  resetValidation,
  completeStep,
  resetAll,
  startSending,
  finishSending,
  showToast,
  hideToast,
} = uiSlice.actions;

export default uiSlice.reducer;
