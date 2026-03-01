import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checks: {
    militaryService: false,
    civilService: false,
  },
  blocks: [
    {
      id: Date.now(),
      startOfWork: "",
      endOfWork: "",
      jobTitle: "",
      placeOfWork: "",
      organizationAddress: "",
    },
  ],
};

const fourthSlice = createSlice({
  name: "fourth",
  initialState,
  reducers: {
    updateBlock: (state, action) => {
      const { id, field, value } = action.payload;
      const block = state.blocks.find((b) => b.id === id);
      if (block) {
        block[field] = value;
      }
    },
    addBlock: (state) => {
      state.blocks.push({
        id: Date.now(),
        startOfWork: "",
        endOfWork: "",
        jobTitle: "",
        placeOfWork: "",
        organizationAddress: "",
      });
    },
    removeBlock: (state, action) => {
      state.blocks = state.blocks.filter(
        (block) => block.id !== action.payload,
      );
    },
    toggleCheck: (state, action) => {
      state.checks[action.payload] = !state.checks[action.payload];
    },
    resetFourth: () => initialState,
  },
});

export const {
  setField,
  updateBlock,
  addBlock,
  removeBlock,
  toggleCheck,
  resetFourth,
} = fourthSlice.actions;

export default fourthSlice.reducer;
