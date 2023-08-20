import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import suggestionSlice from "./suggestionSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    search: searchSlice,
    suggestion: suggestionSlice,
  },
});

export default store;
