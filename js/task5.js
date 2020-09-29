function checkForSpam(str) {
  "use strict";
  const message = " ";
  console.log(str.toLowerCase(str));

  if (str.includes("sale")) {
    return true;
  }

  if (str.includes("[spam]")) {
    return true;
  }
  debugger;
  return false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
