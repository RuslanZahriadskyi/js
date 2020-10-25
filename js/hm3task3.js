const findBestEmployee = function (employees) {
  "use strict";

  //  Write code under this line

  const entries = Object.entries(employees);

  let employeeName = "";

  let numberOfWorks = 0;

  for (let i = 0; i < entries.length; i++) {
    if (numberOfWorks < entries[i][1]) {
      numberOfWorks = entries[i][1];
      employeeName = entries[i][0];
    }
  }
  return employeeName;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 30,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  test: 100,
  ajax: 4,
  poly: 12,
  mango: 17,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

const a = {
  a: 1,
};
console.log(findBestEmployee(a));

const b = {};
console.log(findBestEmployee(b));

// Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".
