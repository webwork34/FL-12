// 1----------------------------------------------------------------------------
function convert(){
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    if(typeof arguments[i] === 'number'){
      arguments[i] = arguments[i].toString();
      newArr.push(arguments[i]);
    }else if(typeof arguments[i] === 'string'){
      arguments[i] = parseInt(arguments[i]);
      newArr.push(arguments[i]);
    }
  }
 return newArr;
}


// 2------------------------------------------------------------------------------
function executeforEach(array, callback){
  for(let i = 0; i < array.length; i++){
    callback(array[i]);
  }
}


// 3------------------------------------------------------------------------------
function mapArray(array, mapFunc){
  let newArr = [];
  executeforEach(array, function(el){
    newArr.push(mapFunc(+el));
  });
  return newArr;
}


// 4--------------------------------------------------------------------------------
function filterArray(array, filterFunc){
  let newArr = [];
  executeforEach(array, function(el){
    if(filterFunc(el) === true){
      newArr.push(el);
    }
  });
  return newArr;
}


// 5----------------------------------------------------------------------
function flipOver(string){
  let newStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
}


// 6---------------------------------------------------------------------
function makeListFromRange(array){
  let newArr = [];
  for (let i = array[0]; i <= array[1]; i++) {
    newArr.push(i);
  }
  return newArr;
}


// 7---------------------------------------------------------
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(array, keyName){
  let newArr = [];
  executeforEach(array, function(el){
    for (const key in el) {
      if(key === keyName){
        newArr.push(el[key]);
      }
    }
  });
  return newArr;
}


// 8---------------------------------------------------------------------
function substitute(array){
  let newArr = [];
  const countNumber = 30;
  mapArray(array, function(el){
    if(el < countNumber){
      el = '*';
    }
    newArr.push(el);
  });
  return newArr;
}


// 9------------------------------------------------------------------------
const yearTask9 = 2019,
      monthTask9 = 0,
      dayTask9 = 2;
const date = new Date(yearTask9, monthTask9, dayTask9);

function getPastDay(date, pastDays){
  let ourDay = new Date(yearTask9, monthTask9, dayTask9);
  ourDay.setDate(date.getDate() - pastDays);
  return ourDay.getDate();
}


// 10---------------------------------------------------------------
function formatDate(newDate){
  const one = 1,
        ten = 10;
  const year = newDate.getFullYear(),
        month = newDate.getMonth() + one,
        day = newDate.getDate(),
        hours = newDate.getHours() < ten ? '0' + newDate.getHours() : newDate.getHours(),
        minutes = newDate.getMinutes() < ten ? '0' + newDate.getMinutes() : newDate.getMinutes();
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}