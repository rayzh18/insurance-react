import { SET_COUNTRIES } from "./actionTypes";
import { SET_DETAIL } from "./actionTypes";

export const set_countries = content => ({
  type: SET_COUNTRIES,
  payload: {
    countries: content
  }
});

export const set_detail = content => ({
  type: SET_DETAIL,
  payload: {
    detail: content
  }
});

