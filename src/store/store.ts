import compilerReducers from "@/pages/compiler/reducers";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    ...compilerReducers,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
