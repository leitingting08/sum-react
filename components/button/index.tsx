import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

const Button = ({ children, type }) => <Button type={type}>{children}</Button>;

Button.propTypes = {
  /**
   * This is a description for this prop.
   * Button type.
   */
  type: propTypes.oneOf(['button', 'submit', 'reset']),
};
Button.defaultProps = {
  type: 'button',
};
export default Button;
