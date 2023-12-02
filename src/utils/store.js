import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import suggestionSlice from "./suggestionSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    search: searchSlice,
    suggestion: suggestionSlice,
    chat:chatSlice,
  },
});

export default store;
