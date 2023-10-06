import { ADDUSER } from "../costant";

import { combineReducers } from "redux";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  radio: string;
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

const formreducer = (state: Formdata = initialState, action: any) => {
  // console.log("reducer call");
  //   debugger;
  switch (action.type) {
    case ADDUSER:
      return { ...state, user: [...state.user, action.payload] };
    default:
      return state;
  }
};

export default formreducer;
