import { LoadingStatus } from 'src/helpers/strings'
import { LoadingStatusType, UserDetailsType } from 'src/types'

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
