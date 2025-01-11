import compilerPreviewSlice from "./compiler-preview.reducer";
import compilerSettingSlice from "./compiler-setting.reducer";

const compilerReducers = {
  ...compilerPreviewSlice,
  ...compilerSettingSlice,
};

export default compilerReducers;
