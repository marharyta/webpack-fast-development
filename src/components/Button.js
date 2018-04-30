import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ href, children }) => {
  return <a href={href}>{children}>hello </a>;
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
};

export default Button;
