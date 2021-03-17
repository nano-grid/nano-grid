<template>
  <component :is="tag" :class="classes" :role="role">
    <template>
      <slot/>
    </template>
  </component>
</template>

<script lang="ts">
  import Vue from "vue";
  import {validateSize} from "../ts/columns-manager.ts";

  /*
    type: Bootstrap / *Custom,
    size:
    - fix size: 45                    ->  30 .. 300
    - percent: 25%                    ->  5% .. 100%
    - fractions: 25/100
    - subtraction: column 45% minus 20px: 45%-20
    - subtraction: column 4/12 minus 20px: 4/12-20
  */

  export default Vue.extend({
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      mode: {
        type: String,
        default: 'column'
      },
      size: {
        default: ''
      },
      tableElement: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      classes() {
        return [
          this.mode,
          this.computedSize,
        ]
      },
      computedSize() {
        return validateSize(this.size);
      },
      role() {
        if(this.tableElement){
          return 'cell';
        } else {
          return "";
        }
      },
    },
    methods: {
      roundUpNumber(value){
        let rest = value % 5;
        let hasNoClassEquivalent = rest > 0;
        if(hasNoClassEquivalent){
          value = value - rest + 5;
        }
        return value.toString();
      }
    }
  });

</script>