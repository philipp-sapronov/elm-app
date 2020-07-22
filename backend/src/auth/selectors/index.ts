import { RootState } from "./../../store/types";

export const userSelector = (state: RootState) => state.auth.user;
