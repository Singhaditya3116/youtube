import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isMenuCollapse: false,
  },
  reducers: {
    //action => reducer function
    toggleMenu: (state) => {
      state.isMenuCollapse = !state.isMenuCollapse;
    },
  },
});

export default navSlice.reducer;
export const { toggleMenu } = navSlice.actions;
