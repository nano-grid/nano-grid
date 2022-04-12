export const cssSizesWidth = [
  [0, 1],
  [1, 20],
  [1, 19],
  [1, 18],
  [1, 17],
  [1, 16],
  [1, 15],
  [1, 14],
  [1, 13],
  [1, 12],
  [1, 11],
  [1, 10],
  [1, 9],
  [1, 8],
  [1, 7],
  [3, 20],
  [1, 6],
  [1, 5],
  [1, 4],
  [3, 10],
  [1, 3],
  [7, 20],
  [2, 5],
  [5, 12],
  [9, 20],
  [1, 2],
  [11, 20],
  [7, 12],
  [3, 5],
  [13, 20],
  [2, 3],
  [7, 10],
  [3, 4],
  [4, 5],
  [5, 6],
  [17, 20],
  [9, 10],
  [11, 12],
  [19, 20],
  [1, 1],
];

export const cssSizesHeight = [
  [0, 1], // 0%
  [1, 20], // 5%
  [1, 10], // 10%
  [3, 20], // 15%
  [1, 5], // 20%
  [1, 4], // 25%
  [3, 10], // 30
  [7, 20], // 35%
  [2, 5], // 40%
  [9, 20], // 45%
  [1, 2], // 50%
  [11, 20], // 55%
  [3, 5], // 60%
  [13, 20], // 65%
  [7, 10], // 70%
  [3, 4], // 75%
  [4, 5], // 80%
  [17, 20], // 85%
  [9, 10], // 90%
  [19, 20], // 95%
  [1, 1], // 100%
];


export const roundUpNumber = (value) => {
  let rest = value % 5;
  let hasNoClassEquivalent = rest > 0;
  if (hasNoClassEquivalent) {
    value = value - rest + 5;
  }
  return value;
}

export const reduceFraction = (n, d) => {
  let numerator = n;
  let denominator = d;
  let minVal = Math.min(n, d);
  for (let c = minVal; c > 0; c--) {
    if (numerator % c === 0 && denominator % c === 0) {
      numerator /= c;
      denominator /= c;
    }
  }
  return [numerator, denominator];
}

export const validateSize = (size) => {
  let width, height, widthStyle, heightStyle, widthReactStyle, heightReactStyle;
  let hasHeight = /[,]/.test(size);

  width = size.split(',')[0] || "";
  height = size.split(',')[1] || "";

  //---------------------------------------------- calculating width
  let isBinomial = /[-]/.test(width);
  let numerator, denominator, subtraction;

  //------------------ calculating width: subtraction -> (10%-5)
  if (isBinomial) {
    subtraction = width.split('-')[1];
    width = width.split('-')[0];

    if (/[*]/.test(subtraction)) {
      let formula = subtraction.split('*');
      subtraction = formula[0] * formula[1];
    } else if (/[/]/.test(subtraction)) {
      let formula = subtraction.split('/');
      subtraction = formula[0] / formula[1];
    }

    subtraction = roundUpNumber(parseInt(subtraction));
  }

  let isPercent = /[%]/.test(width);
  let isFraction = /[/]/.test(width);

  //------------------ calculating width: converting percent into a fraction
  if (isPercent) {
    numerator = parseInt(width);
    denominator = 100;
  }

  //------------------ calculating width: fraction
  if (isFraction) {
    let fraction = width.split('/');
    numerator = parseInt(fraction[0]);
    denominator = parseInt(fraction[1]);
  } else if (!isPercent) {
    numerator = roundUpNumber(parseInt(width));
  }

  //------------------ calculating width: reducing fraction to the simplest form
  if (numerator && denominator) {
    const newVals = reduceFraction(numerator, denominator);
    numerator = newVals[0];
    denominator = newVals[1];
  }

  if (typeof numerator !== 'undefined') {
    width = 'w' + numerator;
  }

  if (denominator) {
    width += 'd' + denominator;
  }

  if (subtraction) {
    width += 'm' + subtraction;
  }

  if (!isPercent && !isFraction && numerator > 300) {
    widthReactStyle = `${numerator}px`;
    widthStyle = `flex-basis: ${numerator}px; width: max(${numerator}px);`;
    width = undefined;
  }

  if (subtraction > 300) {
    let newSize = `calc(${numerator / denominator * 100}% - ${subtraction}px)`;
    widthReactStyle = `${newSize}`;
    widthStyle = `flex-basis: ${newSize}; width: max(${newSize});`;
    width = undefined;
  }

  //---------------------------------------------- calculating height

  if (hasHeight) {
    let isAbsolute;
    isPercent = /[%]/.test(height);
    isAbsolute = /[vh]/.test(height);
    isFraction = /[/]/.test(height);

    numerator = denominator = undefined;

    //------------------ calculating height: converting percent into a fraction
    if (isPercent) {
      numerator = parseInt(height);
      denominator = 100;
    }

    //------------------ calculating height: fraction
    if (isFraction) {
      let fraction = height.split('/');
      numerator = parseInt(fraction[0]);
      denominator = parseInt(fraction[1]);
    } else if (!isPercent) {
      numerator = roundUpNumber(parseInt(height));
    }

    //------------------ calculating height: reducing fraction to the simplest form
    if (numerator && denominator) {
      const newVals = reduceFraction(numerator, denominator);
      numerator = newVals[0];
      denominator = newVals[1];
    }

    if (typeof numerator !== 'undefined') {
      height = 'h' + numerator;
    }

    if (denominator) {
      height += 'd' + denominator;
    }

    if (isAbsolute) {
      height += 'vh';
    }

    if (!isPercent && !isFraction && numerator > 300) {
      heightReactStyle = `${numerator}px`;
      heightStyle = `height: ${numerator}px;`;
      height = undefined;
    }
  }
  return {
    class: [width, height].join(' ').trim(),
    style: [widthStyle, heightStyle].join(' ').trim(),
    width: widthReactStyle,
    height: heightReactStyle,
  };
}

export const validateSpacing = (size) => {
  let value = +size;
  if (value > 0) {
    value = Math.min(Math.max(value, 0.25), 4);

    let rest = value % 0.25;
    if (rest !== 0) {
      value = value - rest;
    }

    return value > 0 ? `sp${value * 100}` : '';
  }
  return "";
}