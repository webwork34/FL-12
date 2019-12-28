function isLeapYear(dateValue){
  let myDate = new Date(dateValue);
  let onlyYear = myDate.getFullYear();
  let res;
  if(!onlyYear){
    res = 'Invalid Date';
  }else{
    if(onlyYear % 400 === 0){
      res = `${onlyYear} is a leap year`;
    }else if(onlyYear % 100 === 0){
      res = `${onlyYear} is not a leap year`;
    }else if(onlyYear % 4 === 0){
      res = `${onlyYear} is a leap year`;
    }else{
      res = `${onlyYear} is not a leap year`;
    }
  }
  return res;
}

isLeapYear();