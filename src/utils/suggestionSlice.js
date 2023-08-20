import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {
    suggestions: false,
  },
  reducers: {
    showSuggestions: (state) => {
      state.suggestions = true;
    },
    hideSuggestions: (state) => {
      state.suggestions = false;
    },
  },
});

export default suggestionSlice.reducer;

export const { showSuggestions, hideSuggestions } = suggestionSlice.actions;
