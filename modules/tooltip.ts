import Vue from 'vue';

const tooltipdirective = {
  bind: function (el, binding): void {
    const value = binding.value;

    el.tooltipMount = () => {
      const direction = Object.keys(binding.modifiers).join(' ');
      const target = el.getBoundingClientRect();

      tooltip.el.innerHTML = value;
      tooltip.el.className = `nano-tooltip ${direction}`;

      const tooltipWidth = tooltip.el.offsetWidth;
      const tooltipHeight = tooltip.el.offsetHeight;

      const tooltipSpacing = 16 / 2; //0.5rem

      let y = 0;
      let x = 0;

      switch (direction) {
        case "top":
        case "top right":
        case "top left":
          y = target.top - tooltipHeight - tooltipSpacing;
          x = target.left;
          break;
        case "bottom":
        case "bottom right":
        case "bottom left":
          y = target.bottom + tooltipSpacing;
          x = target.left;
          break;
        case "right":
          y = target.top;
          x = target.right + tooltipSpacing;
          break;
        case "left":
          y = target.top;
          x = target.left - tooltipWidth - tooltipSpacing;
          break;
      }

      tooltip.el.style.top = `${y}px`;
      tooltip.el.style.left = `${x}px`;
    };
    el.tooltipRemove = () => {
      tooltip.el.innerHTML = "";
      tooltip.el.className = ""
    };
    el.addEventListener('mouseover', el.tooltipMount);
    el.addEventListener('mouseleave', el.tooltipRemove);
  },
}

const tooltip = {
  el: undefined,
  init: function (): void {
    const parent = document.body;
    const node = document.createElement("aside");
    parent.appendChild(node);
    this.el = node;
    this.createDirective();
  },
  createDirective: function () {
    Vue.directive('nano-tooltip', tooltipdirective);
    Vue.directive('nn-tooltip', tooltipdirective);
  }
}

tooltip.init();