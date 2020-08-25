```js
const handleClick = () => {
  console.log('clicked');
};
<>
  <BaseButton onClick={handleClick}>主按钮</BaseButton>
  <pre />
  <BaseButton type="ghost">次按钮</BaseButton>
  <pre />
  <BaseButton type="dashed">虚线按钮</BaseButton>
  <pre />
  <BaseButton type="link">链接按钮</BaseButton>
  <pre />
  <BaseButton type="text">文本按钮</BaseButton>
</>;
```
