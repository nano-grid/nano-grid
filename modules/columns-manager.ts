const maxSubtractionSize = 600;
const maxFixSizeWidth = 300;
const maxFixSizeHeight = 600;
export const cssSizesWidth = [
  [1, 1],
  [19, 20],
  [11, 12],
  [9, 10],
  [17, 20],
  [5, 6],
  [4, 5],
  [3, 4],
  [7, 10],
  [2, 3],
  [13, 20],
  [3, 5],
  [7, 12],
  [11, 20],
  [1, 2],
  [9, 20],
  [5, 12],
  [2, 5],
  [7, 20],
  [1, 3],
  [3, 10],
  [1, 4],
  [1, 5],
  [1, 6],
  [3, 20],
  [1, 7],
  [1, 8],
  [1, 9],
  [1, 10],
  [1, 11],
  [1, 12],
  [1, 13],
  [1, 14],
  [1, 15],
  [1, 16],
  [1, 17],
  [1, 18],
  [1, 19],
  [1, 20],
];

const cssSizesHeight = [
  [1, 1], // 100%
  [19, 20], // 95%
  [9, 10], // 90%
  [17, 20], // 85%
  [4, 5], // 80%
  [3, 4], // 75%
  [7, 10], // 70%
  [13, 20], // 65%
  [3, 5], // 60%
  [11, 20], // 55%
  [1, 2], // 50%
  [9, 20], // 45%
  [2, 5], // 40%
  [7, 20], // 35%
  [3, 10], // 30
  [1, 4], // 25%
  [1, 5], // 20%
  [3, 20], // 15%
  [1, 10], // 10%
  [1, 20], // 5%
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

    subtraction = roundUpNumber(Math.min(Math.max(parseInt(subtraction), 0), maxSubtractionSize));
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
  } else {
    numerator = roundUpNumber(Math.min(Math.max(parseInt(width), 25), maxFixSizeWidth));
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
    width += 'b' + denominator;
  }

  if (subtraction) {
    width += 'm' + subtraction;
  }

  //---------------------------------------------- calculating height

  if (hasHeight) {
    isPercent = /[%]/.test(height);
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
    } else {
      numerator = roundUpNumber(Math.min(Math.max(parseInt(height), 25), maxFixSizeHeight));
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
      height += 'b' + denominator;
    }
  }

  return classNames(width, height);
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