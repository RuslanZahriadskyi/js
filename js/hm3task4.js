const value = Object.values(employees);

let total = 0;

for (let i = 0; i < value.length; i++) {
  total += value[i];
}

return total;

// Задача 3-4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
