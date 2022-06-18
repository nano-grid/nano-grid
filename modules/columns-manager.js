import { nano } from "./helpers";

const cssWidth = [
  "1/20",
  "1/19",
  "1/18",
  "1/17",
  "1/16",
  "1/15",
  "1/14",
  "1/13",
  "1/12",
  "1/11",
  "1/10",
  "1/9",
  "1/8",
  "1/7",
  "3/20",
  "1/6",
  "1/5",
  "1/4",
  "3/10",
  "1/3",
  "7/20",
  "2/5",
  "5/12",
  "9/20",
  "1/2",
  "11/20",
  "7/12",
  "3/5",
  "13/20",
  "2/3",
  "7/10",
  "3/4",
  "4/5",
  "5/6",
  "17/20",
  "9/10",
  "11/12",
  "19/20",
  "1/1",
];

const maxSize = 300;
const cssWClass = new Set([`${nano}w-m0`, `${nano}w-p0`]);
cssWidth.forEach(fr => {
  cssWClass.add(`${nano}w-n${fr.split('/')[0]}d${fr.split('/')[1]}`);
});
for (let ab = 5; ab <= maxSize; ab += 5) {
  cssWClass.add(`${nano}w-p${ab}`);
  cssWidth.forEach(fr => {
    cssWClass.add(`${nano}w-n${fr.split('/')[0]}d${fr.split('/')[1]}-m${ab}`);
  });
}

const getFx = (fx) => {
  const trimFx = fx.replace(/\s+/g, "");
  const width = trimFx.split(',')[0] || "";
  const height = trimFx.split(',')[1] || "";
  return { width, height };
};

const reduceFraction = (val) => {
  const a = val.split('/');
  let numerator = a[0];
  let denominator = a[1];
  let minVal = Math.min(numerator, denominator);

  for (let c = minVal; c > 0; c--) {
    if (numerator % c === 0 && denominator % c === 0) {
      numerator /= c;
      denominator /= c;
    }
  }
  return `${numerator}/${denominator}`;
}

const percent2Fraction = (val) => /(%)|(v(h|w))/.test(val) ? `${parseInt(val)}/100` : val;
const removeRelValues = (val) => !/[%(\/)(vh)(wv)]/.test(val);
const reduceVals = (a, b) => {
  return +a + +b
};

const getSize = (val) => {
  if (val) {
    let isNegativeRelSize = false;
    let relSize = val.match(/([+-]?\d+v(h|w))|([+-]?\d+%)|([+-]?\d+\/\d+)/g);

    if (relSize) {
      const unit = /v(h|w)/g.test(val) ? val.match(/v(h|w)/g)[0] : '';
      relSize = relSize.map(percent2Fraction);

      let den = 1;
      relSize.forEach(val => {
        den *= +val.split('/')[1];
      });

      let num = relSize.map(val => {
        return +val.split('/')[0] * (den / +val.split('/')[1]);
      }).reduce(reduceVals);

      relSize = reduceFraction(`${Math.abs(num)}/${Math.abs(den)}`);
      isNegativeRelSize = num < 0 || den < 0;

      if (!isNegativeRelSize) {
        relSize = relSize.split('/');
        relSize = `n${relSize[0]}d${relSize[1]}${unit}`;
      } else {
        relSize = undefined;
      }
    } else {
      relSize = undefined;
    }

    let absSize = val
      .match(/([+-]?\d+v(h|w))|([+-]?\d+%)|([+-]?\d+\/\d+)|([+-]?\d+\*\d+)|([+-]?\d+)/g);

    if (absSize) {
      absSize = absSize.map(a => {
        return /\d+\*\d+/g.test(a) ? a.split(/\*/g).reduce((b, c) => +b * +c) : a;
      }).filter(removeRelValues);
      if (absSize.length > 0) {
        absSize = absSize.reduce(reduceVals);
        absSize = +absSize <= 0 ? 'm' + Math.abs(absSize) : 'p' + Math.abs(absSize);
      } else {
        absSize = undefined;
      }
    } else {
      absSize = undefined;
    }
    return [relSize, absSize].filter(element => {
      return element !== null && element !== undefined;
    }).join('-');
  } else {
    return undefined;
  }
}

const cssToStyle = (css) => {
  if (css) {
    const dimension = /h-/g.test(css) ? ['height'] : ['flex-basis', 'max-width'];
    const num = /n\d+/g.test(css) ? css.match(/n\d+/g)[0].substring(1) : undefined;
    const den = /d\d+/g.test(css) ? css.match(/d\d+/g)[0].substring(1) : undefined;
    const ab = /[mp]\d+/g.test(css) ? css.match(/[mp]\d+/g)[0].substring(1) : undefined;

    let unit = /n\d+/g.test(css) && /d\d+/g.test(css) ? '%' : '';
    unit = /(v(h|w))/g.test(css) ? css.match(/v(h|w)/g)[0] : unit;

    let operation = `${/m/g.test(css) ? '-' : '+'}`;
    let hasFraction = num && num.length > 0 && den.length > 0;
    let hasAbsoluteValue = ab !== undefined;
    let calculation;
    let absValueIsNegative = /[m]\d+/g.test(css);
    let style;

    let hasCalculation = hasFraction && hasAbsoluteValue;
    let isRelativeValue = hasFraction && !hasAbsoluteValue;
    let isAbsoluteValue = +ab === 0 || !absValueIsNegative && hasAbsoluteValue;

    if (hasCalculation) {
      calculation = `calc(${num && den ? (num / den) * 100 + unit : ""} ${operation} ${+ab !== 0 ? ab + "px" : ""})`;
      style = dimension.map(item => `${item}: ${calculation}`).join("; ");
    } else if (isRelativeValue) {
      calculation = `${num && den ? (num / den) * 100 + unit : ""}`;
      style = dimension.map(item => `${item}: ${calculation}`).join("; ");
    } else if (isAbsoluteValue) {
      calculation = `${ab + "px"}`;
      style = dimension.map(item => `${item}: ${calculation}`).join("; ");
    }

    return style;
  } else {
    return undefined;
  }
};

const getVals = (formula) => {
  const fx = getFx(formula);
  let width = fx.width ? nano + "w-" + getSize(fx.width) : "";
  let height = fx.height ? nano + "h-" + getSize(fx.height) : "";
  const hasCSSWidthClass = cssWClass.has(width);
  const widthSelector = width;
  const heightSelector = height;
  let widthStyle, heightStyle = cssToStyle(height);

  if (!hasCSSWidthClass) {
    widthStyle = cssToStyle(width);
    width = undefined;
  }

  return {
    width,
    widthStyle,
    heightStyle,
    class: [
      width,
    ].join(" ").trim(),
    style: [
      widthStyle,
      heightStyle,
    ].join(" ").trim(),
    selector: {
      width: widthSelector,
      height: heightSelector,
    },
    hasCSSWidthClass,
    formula
  };
};

const validateSpacing = (size) => {
  let value = +size;
  if (value > 0) {
    value = Math.min(Math.max(value, 0.25), 4);

    let rest = value % 0.25;
    if (rest !== 0) {
      value = value - rest;
    }

    return value > 0 ? `${nano}sp${value * 100}` : '';
  }
  return '';
}

export { cssWidth as cssWidthClasses, cssWClass, getVals, validateSpacing };