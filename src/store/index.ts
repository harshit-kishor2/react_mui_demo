import {
  PayloadAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import testReducer, { TestInitialStateType } from './testSlice'

// ======================== Redux : Store =========================

//! Declare interface of all reducers
export interface ApplicationState {
  test: TestInitialStateType
}

//! Combine all reducers
const combinedReducer = combineReducers({
  test: testReducer,
})

const rootReducers: any = (state: any, action: PayloadAction<string>) => {
  if (action.type === 'USER_LOGOUT') {
    // Clear local storage and state
    state = undefined
  }
  return combinedReducer(state, action)
}

// ! Configure Store
const store = configureStore({
  reducer: rootReducers,
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store

// ! Other exports
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
