import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"

import { resetUser } from "../redux/states/user"
import { userStorageKey } from "./Keys.helper"
import { clearLocalStorage } from "./LocalStorage.helper"

export const logout = (dispatch: Dispatch<AnyAction>) => {
    clearLocalStorage(userStorageKey)
    dispatch(resetUser())
}