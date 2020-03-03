This button is amazing, use it responsibly.

## Examples

Orange button:

```vue
<template>
  <demo-button :color="color" @click="fun">Push Me</demo-button>
</template>
<script>
  export default {
    data() {
      return {
        color: "red"
      }
    },
    methods: {
      fun() {
        console.log('clicked!')
      }
    }
  }
</script>
```

Ugly button with pink font and blue background:

```vue
<demo-button color="pink" background="blue">
  Ugly button
</demo-button>
```

Button containing custom tags:

```vue
<demo-button>
  Text with <b>bold</b>
</demo-button>
```
