let makeNumber = string => string.split('')
                                 .filter(char => char.charCodeAt() >= 48 && char.charCodeAt() <= 57);

function countNumbers(str){
  let obj = {};
  let arr = makeNumber(str).sort();
  for (let i = 0, j = 0; i < arr.length; i++) {
    if(arr[i] !== Object.keys(obj)[Object.keys(obj).length - 1]){
      j = 0;
    } 
    obj[arr[i]] = ++j;
  }
  return obj;
}

countNumbers();