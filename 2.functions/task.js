// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  if (arr.length > 0) {
    min = arr[0];
    max = arr[0];
    sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {max = arr[i]};
      if (arr[i] < min) {min = arr[i]};
      sum += arr[i];
    }
    avg = (sum / arr.length).toFixed(2);
    avg = +avg;  
  }
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum;
  if (arr.length > 0) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  if (arrOfArr.length > 0) {
    max = func(arrOfArr[0]);    
    for (let i = 1; i < arrOfArr.length; i++) {      
      //let currentSum = func(arrOfArr[i]);
      //if (currentSum > max) {max = currentSum};
      if (func(arrOfArr[i]) > max) {
        max = func(arrOfArr[i]);
      }
    }
  }  
  return max;
}

// Задание 3
function worker2(arr) {
  let min;
  let max;
  if (arr.length > 0) {
    min = arr[0];
    max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {max = arr[i]};
      if (arr[i] < min) {min = arr[i]};
    }
  }
  return max-min;
}
