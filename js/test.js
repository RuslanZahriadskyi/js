const fnA = function () {
  console.log("Начала выполняться [fnA]");
  fnB();
  console.log("Продолжила выполняться [fnA] после выхода из [fnB]");
};

const fnB = function () {
  console.log("Выполняется [fnB]");
};

console.log("Начал выполнение [main]");
fnA();
console.log("Продолжил выполняться [main] после выхода из [fnA]");

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */
