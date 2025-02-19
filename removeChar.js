function removeChar(str)
{
  let arrayStr = str.split("");
  arrayStr.pop();
  arrayStr.shift();
  
  return arrayStr.join("");
};
