import {
  GET_PROFİLE,
  GET_PROFILES,
  PROFİLE_LOADİNG,
  CLEAR_CURRENT_PROFİLE
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFİLE_LOADİNG:
      return {
        ...state,
        loading: true
      };
    case GET_PROFİLE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFİLE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
