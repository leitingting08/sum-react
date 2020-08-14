```jsx
import React from 'react';
import BiomartButton from '../button';
this.state = { visible: false };
const [visible, setVisible] = React.useState(false);
const showModal = () => {
  console.log('showmodal');
  setVisible(true);
};

<>
  <BiomartModal
    title="Basic Modal"
    visible={visible}
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
  >
    <p>Some contents...</p>
  </BiomartModal>
  <BiomartButton type="primary" onClick={showModal}>
    点击我展示弹窗
  </BiomartButton>
</>;
```
