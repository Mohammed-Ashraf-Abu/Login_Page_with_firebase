import {
  EmailAuth,
  GoogleAuth,
  LogIn_Successful,
  LogOut_Successful,
} from '../action/actionTypes';

const initialState = {
  isLogIn: false,
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LogIn_Successful: {
      return {
        ...state,
        isLogIn: true,
      };
    }
    case LogOut_Successful: {
      return {
        ...state,
        isLogIn: false,
      };
    }
    case EmailAuth: {
      return {
        ...state,
        isLogIn: true,
        user: action.payload,
      };
    }
    case GoogleAuth: {
      return {
        ...state,
        isLogIn: true,
      };
    }

    default:
      return state;
  }
};


