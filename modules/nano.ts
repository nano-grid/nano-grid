import Vue from 'vue';
import { reduceFraction, roundUpNumber } from "./columns-manager";

const nanoDirective = {
  bind: function (el, binding): void {
    const properties = Object.keys(binding.modifiers);
    let numerator, denominator;
    let value = binding.value;

    let isPercent = /[%]/.test(value);
    let isFraction = /[/]/.test(value);

    if (isPercent) {
      numerator = parseInt(value);
      denominator = 100;
    }

    if (isFraction) {
      let fraction = value.split('/');
      numerator = parseInt(fraction[0]);
      denominator = parseInt(fraction[1]);
    } else if (!isPercent) {
      numerator = roundUpNumber(parseInt(value));
    }

    if (isPercent || isFraction) {
      value = reduceFraction(numerator, denominator).join('d');
    }

    const propsDictionary = {
      'width': 'w',
      'max-width': 'mxw',
      'min-width': 'mnw',
      'height': 'h',
      'max-height': 'mxh',
      'min-height': 'mnh',
    };
    let classes = properties.map(property => {
      return `nn-${propsDictionary[property]}${value}`
    }).join(' ');

    el.className += ' ' + classes;
  },
};

const nano = {
  el: undefined,
  init: function (): void {
    const parent = document.body;
    const node = document.createElement("aside");
    parent.appendChild(node);
    this.el = node;
    this.createDirective();
  },
  createDirective: function () {
    Vue.directive('nano', nanoDirective);
    Vue.directive('nn', nanoDirective);
  }
}

nano.init();