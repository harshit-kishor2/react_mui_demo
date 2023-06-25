import { LoadingStatus } from '@helpers/strings'
import { LoadingStatusType, UserDetailsType } from '@types'

// Define interface of initial state
export interface TestInitialStateType {
  loadingStatus: LoadingStatusType
  userDetails: UserDetailsType[]
  userDetailsError: string
}

// Define Initial State
export const initialState: TestInitialStateType = {
  loadingStatus: LoadingStatus.NOT_LOADED,
  userDetails: [],
  userDetailsError: '',
}
