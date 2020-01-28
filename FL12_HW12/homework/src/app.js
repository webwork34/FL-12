const addBtn = document.getElementById('add_new_set_btn'),
      mainPage = document.getElementById('main'),
      addPage = document.getElementById('add_new'),
      editPage = document.getElementById('edit'),
      addTerms = document.getElementById('add_terms'),
      saveTerms = document.getElementById('save_terms'),
      cancelBtn = document.getElementById('cancel'),
      inputName = document.getElementById('input_name');
const zero = 0;
let count, setsArr;


// function checkHash(){
//   console.log(document.location.hash);
// }
// checkHash();


function checkLS(){
  history.replaceState(null, null, ' ');
  if(localStorage.getItem('idTermsLS')){
    count = localStorage.getItem('idTermsLS');
  }else{
    count = zero;
  }

  if(localStorage.getItem('setsOfWords')){
    setsArr = JSON.parse(localStorage.getItem('setsOfWords'));
  
    for (let i = 0; i < setsArr.length; i++) {
      const divSets = document.createElement('div');
      mainPage.appendChild(divSets).classList.add('block');
      divSets.textContent = setsArr[i].name;

      const editBtn = document.createElement('button');
      const removeBtn = document.createElement('button');

      divSets.appendChild(editBtn).classList.add('edit_set_btn');
      divSets.appendChild(removeBtn).classList.add('remove_set_btn');

      editBtn.textContent = 'Edit';
      removeBtn.textContent = 'Remove';

      const removeSets = document.querySelectorAll('.remove_set_btn');
      const editSets = document.querySelectorAll('.edit_set_btn');

      removeSets.forEach((btn, index) => {
        btn.addEventListener('click', function(){
          this.closest('.block').remove();
          setsArr.splice(index, 1);
          index--;
          localStorage.setItem('setsOfWords', JSON.stringify(setsArr));
        });
      });
    }
  }else{
    setsArr = [];
  }
}

function exit(){
  mainPage.style.display = 'block';
  addPage.style.display = 'none';
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(block => {
    block.remove();
  });
  inputName.value = '';
  checkLS();
}

function addNewSet(){
  addBtn.addEventListener('click', function(){
    window.location.hash = '#/add';
    count++;
    localStorage.setItem('idTermsLS', count);
    mainPage.style.display = 'none';
    addPage.style.display = 'block';
    // window.addEventListener('hashchange', function(){
      
      // checkHash();
    // });
    // history.replaceState(null, null, ' ');  // очистить hash
  
    // window.onhashchange = function(e){
    //   console.log(e); // для себя просмотрите объект
    //   // alert('Хеш сейчас ' + document.location.hash)
    // }
    cancelBtn.onclick = function(){
      count--;
      localStorage.setItem('idTermsLS', count);
      exit();
    }
  });
}

function MakeCard(id, name, termsArr, defenetionArr){
  let arrOfTerms = [];
  
  this.id = id;
  this.name = name;
  this.studied = false;
  for (let i = 0; i < termsArr.length; i++) {
    let objOfTerms = {};
    objOfTerms.term = termsArr[i].value;
    objOfTerms.defenition = defenetionArr[i].value;
    arrOfTerms.push(objOfTerms);
  }
    this.arrOfTerms = arrOfTerms;
}


function saveSet(){
  saveTerms.addEventListener('click', () => {
    let nameOfSet = inputName.value;
    if(nameOfSet !== ''){
      const terms = document.querySelectorAll('#term');
      const defenetion = document.querySelectorAll('#defenetion');
     
      let mySet = new MakeCard(count, nameOfSet, terms, defenetion);
      setsArr.push(mySet);
      localStorage.setItem('setsOfWords', JSON.stringify(setsArr));
      exit();
      history.replaceState(null, null, ' ');
    }
  });
}

function addNewTerm(){
  addTerms.addEventListener('click', () => {
    const block = document.createElement('div');
    addPage.appendChild(block).classList.add('block');

    const inputTerm = document.createElement('input'),
          inputDefenition = document.createElement('input'),
          blocks = document.querySelectorAll('.block'),
          remove = document.createElement('button');

    blocks.forEach(block => {
      block.appendChild(inputTerm).classList.add('input_in_block');
      inputTerm.setAttribute('placeholder', 'enter term');
      inputTerm.id = 'term';

      block.appendChild(inputDefenition).classList.add('input_in_block');
      inputDefenition.setAttribute('placeholder', 'enter defenition');
      inputDefenition.id = 'defenetion';

      block.appendChild(remove).classList.add('remove_term_btn');
      remove.textContent = 'Remove';

      const removeBtns = document.querySelectorAll('.remove_term_btn');
      removeBtns.forEach(removeBtn => {
        removeBtn.onclick = function(){
          this.closest('.block').remove();
        }
      });
    });
  });
}

checkLS();
addNewSet();
saveSet();
addNewTerm();

function locationHashChanged() {
  if (location.hash === '#/add') {
    
    // mainPage.style.display = 'none';
    // addPage.style.display = 'block';
    addNewSet();
    // count++;
    // localStorage.setItem('idTermsLS', count);
  }
}

window.onhashchange = locationHashChanged;
// window.addEventListener('hashchange', locationHashChanged);