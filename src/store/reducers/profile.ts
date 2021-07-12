import { CommonAction } from "../actions";
import * as types from "../actions/profile";

export interface ProfileState {
  profile: any
}
const defaultState: ProfileState = {
  profile: null
};

export default (
  state = defaultState,
  action: CommonAction
): any => {
  switch (action.type) {
    case types.LOAD_PROFILE:
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
};
