<template>
  <component
    :is="computedTag"
    :class="computedClasses"
    role="button"
    :aria-label="computedLabel"
    :to="to"
    @click.passive="$emit('click', $event)">
    <m-icon v-if="glyph !== ''" :glyph="glyph"/> 
    <span class="caption" v-if="computedValue">
      {{computedValue}}
    </span>
  </component>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    props: {
      tag: {
        type: String,
        default: 'button',
      },
      glyph: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: undefined,
      },
      color: {
        type: String,
        default: 'gravel',
      },
      active: {
        type: Boolean,
        default: false,
      },
      to: {
        default: undefined
      },
    },
    computed: {
      computedValue(){
        return this.value;
      },
      buttonType(){
        // if(!this.computedValue) {
        //   return 'btn-icon';
        // } else {
        //   return 'btn';
        // }
        return 'btn flat';
      },
      itemColor() {
        return this.color;
      },
      computedTag(){
        if(this.to){
          return 'router-link';
        } else {
          return this.tag;
        }
      },
      computedLabel(){
        if(this.computedValue){
          return `${this.computedValue} button`
        } else {
          return undefined;
        }
      },
      computedClasses() {
        return [
          this.buttonType,
          this.itemColor,
          {
            active: this.active,
          }
        ];
      },
    },
  });
</script>
