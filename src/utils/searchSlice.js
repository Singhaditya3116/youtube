import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    appendData: (state, action) => {
      // state[action.payload] = action.payload;
      // state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;

export const { appendData } = searchSlice.actions;
