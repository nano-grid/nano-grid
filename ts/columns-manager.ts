const maxSubtractionSize = 600;
const maxFixSize = 300;
const cssSizes = [
  [1,1],
  [19,20],
  [11,12],
  [9,10],
  [17,20],
  [5,6],
  [4,5],
  [3,4],
  [7,10],
  [2,3],
  [13,20],
  [3,5],
  [7,12],
  [11,20],
  [1,2],
  [9,20],
  [5,12],
  [2,5],
  [7,20],
  [1,3],
  [3,10],
  [1,4],
  [1,5],
  [1,6],
  [3,20],
  [1,7],
  [1,8],
  [1,9],
  [1,10],
  [1,11],
  [1,12],
  [1,13],
  [1,14],
  [1,15],
  [1,16],
  [1,17],
  [1,18],
  [1,19],
  [1,20],
];

const roundUpNumber = (value) => {
  let rest = value % 5;
  let hasNoClassEquivalent = rest > 0;
  if(hasNoClassEquivalent){
    value = value - rest + 5;
  }
  return value;
}

export const validateSize = (size) => {
  let result = size;
  let isBinomial = /[-]/.test(size);
  let numerator, denominator, subtraction;

  if (isBinomial) {
    subtraction = size.split('-')[1];
    result = size.split('-')[0];

    if(/[*]/.test(subtraction)){
      let formula = subtraction.split('*');
      subtraction = formula[0]*formula[1];
    } else if(/[/]/.test(subtraction)) {
      let formula = subtraction.split('/');
      subtraction = formula[0]/formula[1];
    }

    subtraction = roundUpNumber(Math.min(Math.max(parseInt(subtraction, 10), 0), maxSubtractionSize));
  }

  let isInteger = /^\d+$/.test(result);
  let isPercent = /[%]/.test(result);
  let isFraction = /[/]/.test(result);

  if (isPercent) {
    numerator = parseInt(result);
    denominator = 100;
  }
  
  if(isFraction) {
    let fraction = result.split('/');
    numerator = parseInt(fraction[0]);
    denominator = parseInt(fraction[1]);
  } else if(isInteger) {
    numerator = roundUpNumber(Math.min(Math.max(parseInt(result, 10), 25), maxFixSize));
  }

  if(numerator && denominator) {
    let hasSize = false;
    cssSizes.forEach(size => {
      if(numerator/denominator == size[0]/size[1]){
        numerator = size[0];
        denominator = size[1];
        hasSize = true;
      }
    });
    if(!hasSize){
      denominator = numerator = 1;
    }
  }

  if(numerator) {
    result = 'sz' + numerator;
  }

  if(denominator) {
    result += 'b' + denominator;
  }

  if(subtraction){
    result += 'm' + subtraction;
  }

  return result;
}