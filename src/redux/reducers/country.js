import { SET_COUNTRIES } from "../actionTypes";

const initialState = {
  countries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES: {
      const { countries } = action.payload;
      return {
        ...state,
        countries: [...countries],
      };
    }
    default:
      return state;
  }
}