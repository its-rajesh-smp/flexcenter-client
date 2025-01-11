import { createSlice } from "@reduxjs/toolkit";

const COMPILER_DEFAULT_DATA = "COMPILER_DEFAULT_DATA";

const initialState = {
  currentCompilerType: "static",
  openAIKey: "",
};

const compilerSettingSlice = createSlice({
  name: "code compiler setting",
  initialState,
  reducers: {
    setSettingData: (state, action) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem(COMPILER_DEFAULT_DATA, JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setSettingData } = compilerSettingSlice.actions;
export default compilerSettingSlice.reducer;
