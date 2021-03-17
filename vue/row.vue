<template>
  <component class="nano-row" :class="classes" :is="tag" :role="role">
    <slot/>
  </component>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    /*
      tag: ['div', 'li', 'tr' ...]
      type: ['Bootstrap', 'Custom', 'Table']
    */
    props: {
      tag: {
        type: String,
        default: 'div',
      },
      isHeading: {
        type: Boolean,
        default: false,
      },
      group: {
        type: Boolean,
        default: false,
      },
      content: {
        type: Boolean,
        default: false,
      },
      integrate: {
        type: Boolean,
        default: false,
      },
      squareTag: {
        type: Boolean,
        default: false,
      },
      tableElement: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      classes() {
        return [
          {
            'nano-group': this.group,
            'integrate': this.integrate,
            'content': this.content,
          }
        ]
      },
      role() {
        if(this.tableElement){
          let result = 'row';
          if(this.group || this.squareTag) {
            result = 'group';
          }
          return result;
        } else {
          return "";
        }
      },
    },
  });
</script>