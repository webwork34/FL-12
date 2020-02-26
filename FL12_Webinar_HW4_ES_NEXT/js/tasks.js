//----------------------------1----------------------------
const maxElement = arr => Math.max(...arr);

const arr1 = [1,1,2,15,65464,23,5654,12,6645,55];
console.log('maxElement(arr): ', maxElement(arr1));

//----------------------------2----------------------------
const coppyArray = arr => [...arr];

const arr2 = [1,2,3];
const copiedArray = coppyArray(arr2);
console.log(arr2, copiedArray);
console.log(arr2 === copiedArray);

//----------------------------3----------------------------
const addUniqueId = obj => Object.assign({}, obj, {[Symbol('myId')]: 'uniqueId'});

const myObj = {name: 123};
console.log(addUniqueId(myObj));
console.log(myObj);

//----------------------------4----------------------------
const regroupObject = obj => {
  for (const key in obj) {
    delete obj[key];
  }
    obj.university = 'UNI';
    obj.user = {};
    obj.user.age = 11;
    obj.user.firstName = 'Someone';
    obj.user.id = 1;
    return obj;
};

const oldObj = {
  name: 'Someone',
  details: {
    id: 1,
    age: 11,
    university: 'UNI'
  }
};
console.log(regroupObject(oldObj));

//----------------------------5----------------------------
const findUniqueElements = arr => Array.from(new Set(arr));

const arr5 = [1,1,23,0,0,3,4,45,6,7,8,8,8,6,5,44,4,4,4,3,2,6,7,7,45,65,78,4,0];
console.log(findUniqueElements(arr5));

//----------------------------6----------------------------
const hideNumber = str => str.slice(str.length - 4).padStart(str.length, '*');

const phone = '0123456789';
console.log(hideNumber(phone));

//----------------------------7----------------------------
const add = (a, b) => {
  if(a === undefined || b === undefined){
    throw new Error('Missing property');
  }
  return a + b;
}

console.log(add(1, 3));
// console.log(add(1));

//----------------------------8----------------------------
function objSort(obj){
  console.log(obj.sort((a, b) => {
    let nameA = a.name.toLowerCase(), 
        nameB = b.name.toLowerCase();
    if (nameA < nameB){
      return -1;
    }
    if (nameA > nameB){
      return 1;
    }
    return 0;
  }));
}

const callsSomeAPI = url => {
  fetch(url)
      .then(data => data.json())
      .then(data => objSort(data))
      .catch(err => console.log(err));
};

callsSomeAPI('https://jsonplaceholder.typicode.com/users');

//----------------------------9----------------------------
async function callsSomeAPIAsync(url){
  try{
    const response = await fetch(url);
    const data = await response.json();
    objSort(data);
  } 
  catch(e){
    console.error(e);
  }
}

callsSomeAPIAsync('https://jsonplaceholder.typicode.com/users');