import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "",
  city: "",
  street: "",
  houseNumber: "",
  caseNumber: "",
  buildingNumber: "",
  apartmentNumber: "",
  registrationDate: "",
  factRegion: "",
  factCity: "",
  factStreet: "",
  factHouseNumber: "",
  factCaseNumber: "",
  factBuildingNumber: "",
  factApartmentNumber: "",
};

const thirdSlice = createSlice({
  name: "third",
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetThird: () => initialState,
  },
});

export const { setField, resetThird } = thirdSlice.actions;

export default thirdSlice.reducer;
