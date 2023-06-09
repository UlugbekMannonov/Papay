// TASK - F

function findDigits(str) {
    let digitsString = '';
    for (let i = 0; i < str.length; i++) {
      const yozuv = str.charAt(i);
      if (!isNaN(yozuv)) {
        digitsString += yozuv;
      }
    }
    return digitsString;
  }
  
  const input = 'ad5we34jkf8sw12129das91';
  const result = findDigits(input);
  console.log(result);
  
  