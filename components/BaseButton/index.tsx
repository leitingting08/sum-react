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
  const { onClick, type = 'primary' } = props;
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    if (!onClick) return;
    if (loading) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button {...props} type={type} loading={loading} onClick={handleClick} className="base-btn" />
  );
}

export default BaseButton;
