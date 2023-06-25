import React, { useEffect } from 'react'

const useTitle = ({ siteTitle = 'Demo App', title = 'Home' }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `${title} - ${siteTitle}`
  }, [title])
}

export default useTitle
