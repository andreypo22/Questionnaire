import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  email: "",
  passportType: "",
  checks: {
    foreignCitizenship: false,
    livingAbroad: false,
  },
};

const fifthSlice = createSlice({
  name: "fifth",
  initialState,
  reducers: {
    setPosition: (state, action) => {
      state.passportType = action.payload;
    },
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    toggleCheck: (state, action) => {
      state.checks[action.payload] = !state.checks[action.payload];
    },
    resetFifth: () => initialState,
  },
});

export const { setField, toggleCheck, resetFifth, setPosition } =
  fifthSlice.actions;

export default fifthSlice.reducer;
