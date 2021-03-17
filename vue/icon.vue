<template>
  <component
    :is="tag"
    :class="computedClasses"
  />
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    props: {
      color: {
        type: String,
        default: "",
      },
      tag: {
        type: String,
        default: 'span',
      },
      mode: {
        type: String,
        default: 'icon',
      },
      glyph: {
        type: String,
      },
      direction: {
        type: String,
      },
    },
    computed: {
      itemColor() {
        return this.color;
      },
      computedMode(){
        return this.mode;
      },
      computedGlyph(){
        switch(this.mode){
          case 'mdi':
            return `mdi-${this.glyph}`;
          default:
            return this.glyph;
        }
      },
      computedClasses(){
        return [
          this.computedMode,
          this.itemColor,
          this.computedGlyph,
          this.direction,
          {
            'colorized': this.color !== ''
          }
        ]
      },
    }
  });
</script>
