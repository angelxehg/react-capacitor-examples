const useClasses = (baseClass = '', classes = '') => {
  if (!classes) {
    return baseClass;
  }
  return baseClass + ' ' + classes;
}

export default useClasses;
