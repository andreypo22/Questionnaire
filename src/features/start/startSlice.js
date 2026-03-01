import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  lastname: "",
  surname: "",
  birthdate: "",
  gender: "",
  checks: {
    criminalRecord: false,
    debtsToBailiffs: false,
    activeStatement: false,
    accessToPrivacy: false,
  },
};

const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    setPosition: (state, action) => {
      state.gender = action.payload;
    },
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    toggleCheck: (state, action) => {
      state.checks[action.payload] = !state.checks[action.payload];
    },
    resetStart: () => initialState,
  },
});

export const { setField, toggleCheck, resetStart, setPosition } =
  startSlice.actions;

export default startSlice.reducer;
