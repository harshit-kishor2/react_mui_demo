import { FC, Suspense } from 'react'
import Loader from './Loader'

// project import

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: FC) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  )

export default Loadable
