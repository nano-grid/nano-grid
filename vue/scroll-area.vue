<template>
  <div
    @scroll.passive="$emit('scroll', $event)"
    class="scroll-area"
    :class="classes"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    props: {
      color: {
        type: String,
        default: "silver"
      },
      allowHorizontal: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      itemColor() {
        return this.color;
      },
      classes() {
        return [
          this.itemColor,
          {
            'horizontal': this.allowHorizontal,
          }
        ];
      }
    },
  });
</script>