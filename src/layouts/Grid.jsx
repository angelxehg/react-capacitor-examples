import React from 'react';
import PropTypes from 'prop-types';

import useClasses from '../hooks/use-classes';

const availableSizes = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'
];

export const Row = (props) => {
  const { className } = props;
  const classes = useClasses("row", className);
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export const Column = (props) => {
  const { sm, md, lg, xl, className, auto } = props;
  const classes = [];
  if (xl || lg || md || sm) {
    if (xl) {
      classes.push(`col-xl-${xl}`);
    }
    if (lg) {
      classes.push(`col-lg-${lg}`);
    }
    if (md) {
      classes.push(`col-md-${md}`);
    }
    if (sm) {
      classes.push(`col-sm-${sm}`);
    }
  } else {
    classes.push(auto ? 'col-auto' : 'col');
  }
  if (className) {
    className.split(' ').map(i => classes.push(i));
  }
  return (
    <div className={classes.join(' ')}>
      {props.children}
    </div>
  );
}

Column.propTypes = {
  auto: PropTypes.bool,
  sm: PropTypes.oneOf(availableSizes),
  md: PropTypes.oneOf(availableSizes),
  lg: PropTypes.oneOf(availableSizes),
  xl: PropTypes.oneOf(availableSizes),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

