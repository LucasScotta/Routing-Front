import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, getLocalStorage, userStorageKey, setAndPersistLocalStorage } from "../../helpers";
import { UserInfo } from "../../models";

// default user State
export const EmptyUserState: UserInfo = { id: 0, name: '', email: '', createdAt: 0, colors: []}


export const userSlice = createSlice({
    name: 'user',
    initialState: getLocalStorage(userStorageKey) ? JSON.parse(getLocalStorage(userStorageKey) as string) : EmptyUserState,
    reducers: {
        /**
         * 
         * @param {_state}: UserInfo actual state
         * @param {action}: Object with UserInfo updated
         * @returns {UserInfo}
         */
        createUser: (_state, action): UserInfo => {
            setAndPersistLocalStorage<UserInfo>(userStorageKey, {...EmptyUserState, ...action.payload})
            return action.payload
        },
        /**
         * NO OLVIDARME DE COMENTAR
         * @param state 
         * @param action 
         * @returns 
         */
        updateUser: (state: UserInfo, action): UserInfo => {
            const result = { ...state, ...action.payload }
            setAndPersistLocalStorage(userStorageKey, result)
            return result
        },
        /**
         * reset state to default user
         * @returns {UserInfo}
         */
        resetUser: (): UserInfo => {
            clearLocalStorage(userStorageKey)
            return EmptyUserState
        },
    },
})

export const { createUser, updateUser, resetUser } = userSlice.actions

// UserSliceReducer
export default userSlice.reducer