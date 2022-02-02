'use strict';
let title,
    screens,
    screenPrice,
    adaptive,
    rollback = +(Math.ceil(Math.random()*100)),
    fullPrice,
    allServicePrices,
    servicePercentPrice,
    service1,
    servicePrice1,
    service2,
    servicePrice2;

const isNumber = function (num) {
  return !isNan(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
  screenPrice = prompt("Сколько будет стоить данная работа?");

  while (!isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  }
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

  const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        service2 = prompt("Какой дополнительный тип услуги нужен?");
      }
      sum += +prompt("Сколько это будет стоить?");
    }
    return sum;
};

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
};
//конструкция условий расчета
const getRollbackMessage = function(price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0){
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getFullPrice = function() {
  return screenPrice + allServicePrices;
};

const getTitle = function(){
  title.trim();
  return title.charAt(0).toUpperCase(0) + title.slice(1);
};

const getServicePercentPrices = function(){
  return fullPrice - (fullPrice * (rollback / 100));
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


