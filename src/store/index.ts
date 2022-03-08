import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./modules/counter";
import counterReducer from "./modules/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
