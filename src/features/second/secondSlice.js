import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeOfBirth: "",
  seriesAndNumber: "",
  dateOfIssue: "",
  departmentCode: "",
  issuedBy: "",
};

const secondSlice = createSlice({
  name: "second",
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetSecond: () => initialState,
  },
});

export const { setField, resetSecond } = secondSlice.actions;

export default secondSlice.reducer;
