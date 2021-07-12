/**
 * my account related action
 */
 import { AppThunk } from "../constants";
 import dataSvc from "../../services/dataService";
 
 export const LOAD_DATA = "[DATA] LOAD_DATA";
 export const LOAD_DATA_ERROR = "[DATA] LOAD_DATA_ERROR";
 export const LOAD_PROFILE = "[DATA] LOAD_PROFILE";
 
export const ACTIONS_DATA = {
    loadError: () => ({
      type: LOAD_DATA_ERROR,
    }),

    loadProfile: (data: any) => ({
      type: LOAD_DATA,
      payload: data
    })
}

export const loadProfile = (): AppThunk => async (dispatch:any) => {
 dataSvc.loadProfile().then((data) => {
   dispatch(ACTIONS_DATA.loadProfile(data))
 }).catch(e => dispatch(ACTIONS_DATA.loadError()))
};