import React, { useState } from 'react';
import { Button } from 'antd';

interface Props {
  /**
   * 点击事件
   */
  onClick: Function;
}

/**
 * Button 组件
 * @link [antd button](https://ant.design/components/button-cn/)
 */

function BiomartButton(props: Props) {
  const { onClick } = props;
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return <Button {...props} loading={loading} onClick={handleClick}></Button>;
}

export default BiomartButton;
