module.exports = function check(str, bracketsConfig) {
const OPEN_BRACKETS = [];
const BRACKETS_PAIR = {};

for (const [open, close] of bracketsConfig) {
  OPEN_BRACKETS.push(open);
  BRACKETS_PAIR[close] = open;
}

function isBracketsOk(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol)) {
      if (BRACKETS_PAIR[currentSymbol] === currentSymbol) {
        if (stack[stack.length - 1] === currentSymbol) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      const topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
return isBracketsOk(str);
};