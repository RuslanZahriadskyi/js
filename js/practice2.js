// Эльфы Санты - это боксерские подарки, и им нужна твоя помощь! Напишите функцию, которая принимает две последовательности

// измерений настоящего и коробки, соответственно, и возвращает логическое значение в зависимости от того,

//     поместится ли настоящее в предоставленную коробку.Стенки коробки имеют толщину в одну единицу, поэтому обязательно примите это во внимание.

// Примеры: Подарок и коробка соответственно.

// [10, 7, 16], [13, 32, 10] --> true, box is bigger than present
// [5, 7, 9], [9, 5, 7]      --> false, present and box are same size
// [17, 22, 10], [5, 5, 10]) --> false, box is too small

// function presentSized(present) {
//   let presentSize = 0;

//   for (let i = 0; i < present.length; i++) {
//     presentSize += present[i];
//   }

//   return presentSize;
// }

// function boxSized(box) {
//   let boxSize = 0;

//   for (let i = 0; i < box.length; i++) {
//     boxSize += box[i];
//   }

//   return boxSize;
// }

// function presentInToTheBox(presentSized, boxSized) {
//   let message = "";
//   if (presentSized < boxSized) {
//     message = "true, box is bigger than present";
//     return message;
//   }
//   if (presentSized === boxSized) {
//     message = "false, present and box are same size";
//     return message;
//   }
//   if (presentSized > boxSized) {
//     message = "false, box is too small";
//     return message;
//   }
// }

// console.log(
//   presentInToTheBox(presentSized([10, 7, 16]), boxSized([13, 32, 10]))
// );

// console.log(presentInToTheBox(presentSized([5, 7, 9]), boxSized([9, 5, 7])));

// console.log(
//   presentInToTheBox(presentSized([17, 22, 10]), boxSized([5, 5, 10]))
// );

function willFit(present, box) {
  let presentSize = 0;
  for (let i = 0; i < present.length; i++) {
    presentSize += present[i];
  }

  let boxSize = 0;

  for (let i = 0; i < box.length; i++) {
    boxSize += box[i];
  }

  let message = "";

  if (presentSize < boxSize) {
    message = "true, box is bigger than present";
    return message;
  }

  if (presentSize === boxSize) {
    message = "false, present and box are same size";
    return message;
  }

  if (presentSize > boxSize) {
    message = "false, box is too small";
    return message;
  }
}

console.log(willFit([10, 7, 16], [13, 32, 10]));
console.log(willFit([5, 7, 9], [9, 5, 7]));
console.log(willFit([17, 22, 10], [5, 5, 10]));
