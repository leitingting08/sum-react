```jsx
import React from 'react';
import BaseButton from '../button';
this.state = { visible: false };
const [visible, setVisible] = React.useState(false);
const showModal = () => {
  console.log('showmodal');
  setVisible(true);
};

<>
  <BaseModal
    title="Basic Modal"
    visible={visible}
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
  >
    <p>Some contents...</p>
  </BaseModal>
  <BaseButton type="primary" onClick={showModal}>
    点击我展示弹窗
  </BaseButton>
</>;
```
