import React from 'react'
import PropTypes from 'prop-types'

const useClasses = (baseClass = '', classes = '') => {
  if (!classes) {
    return baseClass;
  }
  return baseClass + ' ' + classes;
}

export const Container = (props) => {
  const { className, children } = props;
  const classes = useClasses("container", className);
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
