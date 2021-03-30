import React from 'react'
import PropTypes from 'prop-types'

import useClasses from '../hooks/use-classes';

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
