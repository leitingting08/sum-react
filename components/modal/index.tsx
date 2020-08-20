import React from 'react';
import { Modal } from 'antd';
import './index.less';

interface Props {
  /**
   * 弹窗是否展示
   */
  visible?: boolean;
  /**
   * 垂直居中展示 Modal
   */
  centered?: boolean;
  /**
   * 确认文案
   */
  okText?: string;
  /**
   * 取消文案
   */
  cancelText?: string;
  /**
   * 点击确定回调
   */
  onOk?: Function;
  /**
   * 点击取消回调
   */
  onCancel?: Function;
}

/**
 * Modal 组件
 * @link [antd modal](https://ant.design/components/modal-cn/)
 */

function BaseModal(props: Props) {
  const { centered = true, visible, onOk, onCancel, okText = '确认', cancelText = '取消' } = props;
  return (
    <Modal
      {...props}
      className="base-modal"
      visible={visible}
      okText={okText}
      cancelText={cancelText}
      centered={centered}
      closeIcon={<span className="base-closebtn">×</span>}
      onOk={() => onOk}
      onCancel={() => onCancel}
    />
  );
}

export default BaseModal;
