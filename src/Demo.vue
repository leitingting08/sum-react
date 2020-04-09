<template>
  <button :style="styles" @click="handleClick">
    <!-- @slot Use this slot to place the button content -->
    <slot></slot>
  </button>
</template>

<script>
/**
 * 注释文档写法：
 * https://vue-styleguidist.github.io/docs/Documenting.html#code-comments
 */
import demoMixin from './demoMixin'
export default {
  name: 'demo-button',
  mixins: [demoMixin],
  props: {
    /**
     * Sets the button font color
     */
    color: {
      type: String,
      default: 'black'
    },
    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: 'white'
    },
    /** @deprecated Use color instead */
    oldColor: String
  },
  computed: {
    styles () {
      return {
        'font-size': this.size,
        color: this.color,
        background: this.background
      }
    }
  },
  methods: {
    /**
     * click method
     * @param {Event} e
     * @public
     */
    handleClick (e) {
      /** Triggered when button is clicked
      * @event click
      * @type {Event}
      */
      this.$emit('click', e)

      /** Event for Alligator's example
      * @event gator
      * @type {Event}
      */
      this.$emit('gator', e)
    }
  }
}
</script>
