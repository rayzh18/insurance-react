import { SET_DETAIL } from "../actionTypes";

const initialState = {
  detail: {
    country: {value: 0, label: ""},
    from: "",
    to: "",
    type: "",
    sport: "",
    countOfTravelers: 1,
    ageOfTravelers: [],
    family: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DETAIL: {
      const { detail } = action.payload;
      console.log('set detail info ==>', detail);
      return {
        ...state,
        detail: { ...state.detail, ...detail },
      };
    }
    default:
      return state;
  }
}