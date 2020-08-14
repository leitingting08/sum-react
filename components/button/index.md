```js
const handleClick = () => {
  console.log('clicked');
};
<>
  <BiomartButton onClick={handleClick}>主按钮</BiomartButton>
  <pre />
  <BiomartButton type="ghost">次按钮</BiomartButton>
  <pre />
  <BiomartButton type="dashed">虚线按钮</BiomartButton>
  <pre />
  <BiomartButton type="link">链接按钮</BiomartButton>
  <pre />
  <BiomartButton type="text">文本按钮</BiomartButton>
</>;
```
