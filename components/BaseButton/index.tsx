import React, { useState } from 'react';
import { Button } from 'antd';
import './index.less';

interface Props {
  /**
   * 按钮类型 默认primary
   */
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * 点击事件  有交互的时候用这个
   */
  onClick?: Function;
}

/**
 * Button 组件
 * @link [antd button](https://ant.design/components/button-cn/)
 */

function BaseButton(props: Props) {
  const { onClick, type } = props;

  return <Button {...props} type={type} onClick={onClick} className="base-btn" />;
}

BaseButton.defaultProps = {
  type: 'primary',
};

export default BaseButton;
