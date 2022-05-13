const cssWidth = [
  '1/20',
  '1/19',
  '1/18',
  '1/17',
  '1/16',
  '1/15',
  '1/14',
  '1/13',
  '1/12',
  '1/11',
  '1/10',
  '1/9',
  '1/8',
  '1/7',
  '3/20',
  '1/6',
  '1/5',
  '1/4',
  '3/10',
  '1/3',
  '7/20',
  '2/5',
  '5/12',
  '9/20',
  '1/2',
  '11/20',
  '7/12',
  '3/5',
  '13/20',
  '2/3',
  '7/10',
  '3/4',
  '4/5',
  '5/6',
  '17/20',
  '9/10',
  '11/12',
  '19/20',
  '1/1',
];

const cssHeight = [
  '1/20',
  '1/10',
  '3/20',
  '1/5',
  '1/4',
  '3/10',
  '7/20',
  '2/5',
  '9/20',
  '1/2',
  '11/20',
  '3/5',
  '13/20',
  '7/10',
  '3/4',
  '4/5',
  '17/20',
  '9/10',
  '19/20',
  '1/1',
];

const maxSize = 300;
const prefix = 'nn-';

const cssWClass = [];
for (let ab = 0; ab <= maxSize; ab += 5) {
  cssWClass.push(`${prefix}w-p${ab}`);
  cssWidth.forEach(fr => {
    cssWClass.push(`${prefix}w-n${fr.split('/')[0]}d${fr.split('/')[1]}-m${ab}`);
  });
}

const cssHClass = [];
for (let ab = 0; ab <= maxSize; ab += 5) {
  cssHClass.push(`${prefix}h-p${ab}`);
  cssHeight.forEach(fr => {
    cssHClass.push(`${prefix}h-n${fr.split('/')[0]}d${fr.split('/')[1]}-m${ab}`);
  });
}

const getFx = (fx) => {
  const trimFx = fx.replace(/\s+/g, '');
  const width = trimFx.split(',')[0] || '';
  const height = trimFx.split(',')[1] || '';
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
const reduceFractions = (val) => /\//.test(val) ? reduceFraction(val) : val;
const removeRelValues = (val) => !/[%(\/)(vh)(wv)]/.test(val);
const reduceVals = (a, b) => {
  return +a + +b
};

const getSize = (val) => {
  if (val) {
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
      const isNegativeRelSize = /-/g.test(relSize);

      if (!isNegativeRelSize) {
        relSize = relSize.split('/');
        relSize = `n${relSize[0]}d${relSize[1]}${unit}-`;
      } else {
        relSize = '';
      }
    } else {
      relSize = '';
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
        absSize = 'm0';
      }
    } else {
      absSize = 'm0';
    }

    return `${relSize}${absSize}`;
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
    let hasCalc = num && num.length > 0 && den.length > 0;
    let calculation;
    let absValueIsNegative = /[m]\d+/g.test(css);
    let style;

    if (hasCalc && +ab !== 0) {
      calculation = `calc(${num && den ? (num / den) * 100 + unit : ''} ${operation} ${+ab !== 0 ? ab + 'px' : ''})`;
      style = dimension.map(item => `${item}: ${calculation}`).join('; ');
    } else if (hasCalc && +ab === 0) {
      calculation = `${num && den ? (num / den) * 100 + unit : ''}`;
      style = dimension.map(item => `${item}: ${calculation}`).join('; ');
    } else if (!absValueIsNegative) {
      calculation = `${ab + 'px'}`;
      style = dimension.map(item => `${item}: ${calculation}`).join('; ');
    }

    return style;
  } else {
    return undefined;
  }
};

const getVals = (formula) => {
  const fx = getFx(formula);
  let width = fx.width ? prefix + 'w-' + getSize(fx.width) : '';
  let height = fx.height ? prefix + 'h-' + getSize(fx.height) : '';
  const hasCSSWidthClass = cssWClass.includes(width);
  const hasCSSHeightClass = cssHClass.includes(height);
  const widthSelector = width;
  const heightSelector = height;
  let widthStyle, heightStyle;

  if (!hasCSSWidthClass) {
    widthStyle = cssToStyle(width);
    width = undefined;
  }
  if (!hasCSSHeightClass) {
    heightStyle = cssToStyle(height);
    height = undefined;
  }

  return {
    width,
    height,
    widthStyle,
    heightStyle,
    css: [
      width,
      height,
    ].join(' ').trim(),
    style: [
      widthStyle,
      heightStyle,
    ].join(' ').trim(),
    selector: {
      width: widthSelector,
      height: heightSelector,
    },
    hasCSSWidthClass,
    hasCSSHeightClass,
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

    return value > 0 ? `${prefix}sp${value * 100}` : '';
  }
  return '';
}

export { cssWClass, cssHClass, getVals, validateSpacing };

/* ------------------- testing */

[
  {
    test: '50 + 25 - 10, 0',
    case: 'testing zero as initial value (on height)',
    expect: 'w: nn-w-p65, h: undefined, wS: undefined, hS: undefined',
  },
  {
    test: '0, 50 + 25 - 10',
    case: 'testing zero as initial value (on width)',
    expect: 'w: undefined, h: nn-h-p65, wS: undefined, hS: undefined',
  },
  {
    test: '11, 15',
    case: 'testing a combination of valid css sizes and out of range values (styles)',
    expect: 'w: undefined, h: nn-h-p15, wS: flex-basis: 11px; max-width: 11px, hS: undefined',
  },
  {
    test: '-250',
    case: 'testing negative absolute values',
    expect: 'w: undefined, h: undefined, wS: undefined, hS: undefined',
  },
  {
    test: '25%-250',
    case: 'testing formula with negative absolute value',
    expect: 'w: nn-w-n1d4-m250, h: undefined, wS: undefined, hS: undefined'
  },
  {
    test: '-10%',
    case: 'testing negative relative values',
    expect: 'w: nn-w-n1d10-m0, h: undefined, wS: undefined, hS: undefined',
  },
  {
    test: '25% - 25% + 1/4 + 100/400',
    case: 'testing relative sizes operations',
    expect: 'w: nn-w-n1d2-m0, h: undefined, wS: undefined, hS: undefined',
  },
  {
    test: '500',
    case: 'testing out of range width values',
    expect: 'w: undefined, h: undefined, wS: flex-basis: 500px; max-width: 500px, hS: undefined',
  },
  {
    test: ',500',
    case: 'testing out of range height values',
    expect: 'w: undefined, h: undefined, wS: undefined, hS: height: 500px',
  },
  {
    test: '40% - 20% + 50 - 25, 50 - 25',
    case: 'testing susbtraction on width and height',
    expect: 'w: undefined, h: nn-h-p25, wS: flex-basis: calc(20% + 25px); max-width: calc(20% + 25px), hS: undefined',
  },
  {
    test: '40% - 22%',
    case: 'testing relative sizes out of range',
    expect: 'w: undefined, h: undefined, wS: flex-basis: 18%; max-width: 18%, hS: undefined',
  },
  {
    test: ', 15% + 25 * 2 - 10 + 100',
    case: 'testing multiplication on height',
    expect: 'w: undefined, h: undefined, wS: undefined, hS: height: calc(15% + 140px)',
  },
  {
    test: ', 15% - 25 * 2 - 10',
    case: 'testing negative multiplications on height',
    expect: 'w: undefined, h: nn-h-n3d20-m60, wS: undefined, hS: undefined',
  },
  {
    test: ', 13%',
    case: 'testing height relative values out of range with no calculation',
    expect: 'w: undefined, h: undefined, wS: undefined, hS: height: 13%',
  },
  {
    test: '15vw + 25 * 2',
    case: 'testing vw width',
    expect: 'w: undefined, h: undefined, wS: flex-basis: calc(15vw + 50px); max-width: calc(15vw + 50px), hS: undefined',
  },
  {
    test: ', 15vh + 25 * 2',
    case: 'testing vh height',
    expect: 'w: undefined, h: undefined, wS: undefined, hS: height: calc(15vh + 50px)',
  },
].forEach((a, index) => {
  const fx = getVals(a.test);
  const result = `w: ${fx.width}, h: ${fx.height}, wS: ${fx.widthStyle}, hS: ${fx.heightStyle}`;
  const passing = a.expect === result;

  console.log(`\n*********** ${index} ***********`);
  console.log('test: ', a.test);
  console.log('case: ', a.case);
  console.log('expect: ', a.expect);
  console.log('result: ', result);

  if (passing) {
    console.log('%c -- passing ⭐', 'color: #a3d65a; background-color: #23232f');
  } else {
    console.log('%c -- not passing 🔥', 'color: #ff6d40; background-color: #23232f');
  }
});