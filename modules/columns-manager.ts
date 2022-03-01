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

const classNames = require('classnames');

const roundUpNumber = (value) => {
  let rest = value % 5;
  let hasNoClassEquivalent = rest > 0;
  if (hasNoClassEquivalent) {
    value = value - rest + 5;
  }
  return value;
}

export const validateSize = (size) => {
  let width, height;
  let widthStyle, heightStyle;
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

    subtraction = roundUpNumber(Math.max(parseInt(subtraction), 0));
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
    numerator = roundUpNumber(Math.max(parseInt(width), 0));
  }

  //------------------ calculating width: reducing fraction to the simplest form
  if (numerator && denominator) {
    let hasSize = false;
    cssSizesWidth.forEach(size => {
      if (numerator / denominator == size[0] / size[1]) {
        numerator = size[0];
        denominator = size[1];
        hasSize = true;
      }
    });
    if (!hasSize) {
      denominator = numerator = 1;
    }
  }

  if (numerator) {
    width = 'w' + numerator;
  }

  if (denominator) {
    width += 'd' + denominator;
  }

  if (subtraction) {
    width += 'm' + subtraction;
  }

  if (!isPercent && !isFraction && numerator > 300) {
    widthStyle = `width: ${numerator}px;`;
    width = undefined;
  }

  if(subtraction > 300){
    widthStyle = `width: calc(${numerator/denominator * 100}% - ${subtraction}px );`;
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
      numerator = roundUpNumber(Math.max(parseInt(height), 0));
    }

    //------------------ calculating height: reducing fraction to the simplest form
    if (numerator && denominator) {
      let hasSize = false;
      cssSizesHeight.forEach(size => {
        if (numerator / denominator == size[0] / size[1]) {
          numerator = size[0];
          denominator = size[1];
          hasSize = true;
        }
      });
      if (!hasSize) {
        denominator = numerator = 1;
      }
    }

    if (numerator) {
      height = 'h' + numerator;
    }

    if (denominator) {
      height += 'd' + denominator;
    }

    if (isAbsolute) {
      height += 'vh';
    }

    if (!isPercent && !isFraction && numerator > 300) {
      heightStyle = `height: ${numerator}px;`;
      height = undefined;
    }
  }

  return { class: classNames(width, height), style: classNames(widthStyle, heightStyle) };
}

export const validateSpacing = (size) => {
  let value = parseInt(size, 10);
  if (value > 0) {
    value = Math.min(Math.max(value, 25), 400);

    let rest = value % 25;
    if (rest !== 0) {
      value = value - rest;
    }

    return `sp${value}`;
  }
  return "";
}