import { REGISTRATION } from "../costant";
import { combineReducers } from "redux";

  type UserData = {
    // Define the structure of a user
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    // Add other properties as needed
  };

type Formdata = {
  user: UserData[]; // Define user property as an array of UserData
  isloading: boolean;
  error: string;
};

const initialState: Formdata = {
  user: [],
  isloading: false,
  error: "",
};

const Registraionformreducer = (
  state: Formdata = initialState,
  action: any
) => {
  switch (action.type) {
    case REGISTRATION:
      return { ...state, user: [...state.user, action.payload] };
    default:
      return state;
  }
};

export default Registraionformreducer;
