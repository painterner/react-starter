import { ThunkAction } from "@reduxjs/toolkit";
import { CommonAction } from "./actions";
import { ProfileState } from "./reducers/profile";

export interface IAppState {
  profile: ProfileState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IAppState,
  unknown,
  CommonAction
>;
