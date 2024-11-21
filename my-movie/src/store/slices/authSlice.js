import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actionResult: null,
  loginState: {
    isLoggedIn: false,
    loggedInId: null,
  },
  loginData: [
    {
      id: "user1",
      password: "1111",
    },
  ],
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, password } = action.payload;
      const loginCheck = state.loginData.find((loginDatum) => id === loginDatum.id && password === loginDatum.password );
      
      if (loginCheck) {
        state.loginState.isLoggedIn = true;
        state.loginState.loggedInId = id;
        state.actionResult = { success: true };
      } else {
        state.actionResult = { success: false };
      };
    },
    logout: (state) => {
      state.loginState.isLoggedIn = false;
      state.loginState.loggedInId = null;
      state.actionResult = { succes: true };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;