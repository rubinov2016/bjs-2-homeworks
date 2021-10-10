"use strict"
function solveEquation(a, b, c) {
  let arr =[];  
  let d = Math.pow(b,2)-4*a*c;
  if (d === 0) {
    arr.push(-b/(2*a));
  } 
  if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  }   
  return arr; // array
}


//процентная ставка, сумма первоначального взноса, сумма кредита и срок (дата окончания кредита) 
function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict"
  //сумма, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).    
  let totalAmount = 0;
  let currentTime = new Date();
  let currentMonth = currentTime.getMonth();  
  let currentYear = currentTime.getFullYear(); 
  if (String(parseFloat(percent, 10)) != String(percent)) {
    return 'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"';
  }  
  if (String(parseFloat(contribution, 10)) != String(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"';
  } 
  if (String(parseFloat(amount, 10)) != String(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"';
  } 
  if ((percent < 0) || (contribution < 0) || (amount < 0) || (date < currentTime)) {
    return 'Параметр <название параметра> содержит неправильное значение <значение параметра>'  
  } 
  //тело кредита: сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос)
  let principalAmount = amount - contribution;
  //на какой срок был выдан кредит (в месяцах).
  let numberMonths = date.getMonth() - currentMonth + (12 * (date.getFullYear() - currentYear));
  let monthlyPercent = percent/12/100;
  //Ежемесячная оплата 
  //Платеж = S * (P + P / (((1 + P)^n) - 1)), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев 
  let monthlyPayment = principalAmount * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent,numberMonths)-1));  
  return +parseFloat(monthlyPayment * numberMonths).toFixed(2);
}
