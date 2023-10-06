import { configureStore } from "@reduxjs/toolkit";
import formreducer from "./reducer/userFormReducer";
import RegistrationrootReducer from "./reducer/registrationReducer";

const store = configureStore({
  reducer: {
    studentdata: formreducer,
    Registrationdata: RegistrationrootReducer,
  },
});

export default store;
