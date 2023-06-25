import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './types'
import { apiAction } from './actions'
import { LoadingStatus } from 'src/helpers/strings'

// =============================== Redux : Test Slice ==================================

/**
 * Slice for all reducres
 */
const reduxSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    resetSliceState: (state, action) => {
      return {
        ...initialState,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiAction.pending, (state) => {
        state.loadingStatus = LoadingStatus.LOADING
      })
      .addCase(apiAction.fulfilled, (state, action: any) => {
        state.loadingStatus = LoadingStatus.LOADED
      })
      .addCase(apiAction.rejected, (state, action: any) => {
        state.loadingStatus = LoadingStatus.FAILED
      })
  },
})

/*
 * Export reducer for store configuration.
 */

export const { resetSliceState } = reduxSlice.actions

export const testReducer = reduxSlice.reducer
