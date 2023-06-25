export const URL_BASE_PATH = '/react_mui_demo'

//Navigate to base url
const useBasepath = () => {
  const pathName = window.location.pathname

  if (!pathName.includes(URL_BASE_PATH)) {
    window.history.replaceState('', '', URL_BASE_PATH + pathName)
  }
}

export default useBasepath
