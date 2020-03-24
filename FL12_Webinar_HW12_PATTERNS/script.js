$.getJSON("./db.json", db => {

  const employeesBtn = document.getElementById('employees'),
        poolsBtn = document.getElementById('pools'),
        warningBtn = document.getElementById('warning'),

        employeesDiv = document.querySelector('.employees'),
        poolsDiv = document.querySelector('.pools'),
        warningDiv = document.querySelector('.warning');

  class Component {
    constructor (props) {
      this.props = props;
    }

    add(child) {
      this.props.children.push(child);
    }

    getName(){
      return this.props.name;
    }

    getPoolName(){
      return this.props.poolName;
    }
  }

  class RM extends Component {
    update() {
      for (const child of this.props.children) {
        child.update();
      }
    }

    getSalary() {
      for (const child of this.props.children) {
        child.getSalary();
      }
    }

    getAverageSalary() {
       return (this.props.children
        .map(child => child.getSalary())
        .reduce((a, b) => a +b)) / this.props.children.length;
    }

    getWarning() {
      const averageSalary = this.getAverageSalary();
      return this.props.children
        .filter(child => child.getSalary() < averageSalary);
    }
  }

  class Dev extends Component {
    update() {
      console.log(this.props.name + ' updated');
    }

    getSalary(){
      return this.props.salary;
    }
  }
 
  const devDb = []; 
  const rmDb = [];
  
  for (let i = 1; i < db.length; i++) {
    if(db[i].hasOwnProperty('pool_name')){

      rmDb.push(new RM( {
        id: i + 1,
        rmId: db[i].rm_id,
        name: db[i].name,
        performance: db[i].performance,
        lastVacation: db[i].last_vacation_date,
        salary: db[i].salary,
        poolName: db[i].pool_name,
        children: []
      } ));

    }else{
      devDb.push(new Dev({
        id: i + 1,
        rmId: db[i].rm_id,
        name: db[i].name,
        performance: db[i].performance,
        lastVacation: db[i].last_vacation_date,
        salary: db[i].salary
      }));
    }
  }

  const topRM = new RM({
    id: 1,
    rmId: null,
    name: db[0].name,
    performance: db[0].performance,
    lastVacation: db[0].last_vacation_date,
    salary: db[0].salary,
    poolName: db[0].pool_name,
    children: rmDb
  });

  for (let j = 0; j < rmDb.length; j++) {
    for (let i = 0; i < devDb.length; i++) {
      if(devDb[i].props.rmId === rmDb[j].props.rmId 
        && devDb[i].props.performance === rmDb[j].props.performance){
        rmDb[j].add(devDb[i]);
      }
    }
  }

  {
    const topUl = document.createElement('ul');
    employeesDiv.appendChild(topUl).classList.add('top-ul');
    const topLi = document.createElement('li');
    const topPool = employeesDiv.querySelector('.top-ul');
    topPool.appendChild(topLi).classList.add('top-li');
    const topLiQuery = employeesDiv.querySelector('.top-li');
    const topHeader = document.createElement('h2');
    topLiQuery.appendChild(topHeader).textContent = 
      `${topRM.getName()},
      POOL - ${topRM.getPoolName()}`;

    const ul = document.createElement('ul');
    topLiQuery.appendChild(ul).classList.add('main-ul');
    const mainUl = employeesDiv.querySelector('.main-ul');

    for (let i = 0; i < rmDb.length; i++) {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      mainUl.appendChild(li).classList.add(`li${i}`);

      const liRm = mainUl.querySelectorAll('li');
      const ulDevCreated = document.createElement('ul');
      liRm.forEach(li => {
        li.appendChild(h3).textContent = 
          `${rmDb[i].getName()}, 
          POOL - ${rmDb[i].getPoolName()}`;
        li.appendChild(ulDevCreated).classList.add(`ulDev`);
      });
    }
    const ulDevQueryAll = employeesDiv.querySelectorAll('.ulDev');
    ulDevQueryAll.forEach((ul, i) => {
      for (let j = 0; j < rmDb[i].props.children.length; j++) {
        const liDev = document.createElement('li');
        ul.appendChild(liDev).textContent = `${rmDb[i].props.children[j].getName()}`;
      }
    });
  }

  employeesBtn.addEventListener('click', () => {
    poolsDiv.style.display = 'none';
    warningDiv.style.display = 'none';
    employeesDiv.style.display = 'block';
  });

  poolsBtn.addEventListener('click', () => {
    $('.pools').empty();
    employeesDiv.style.display = 'none';
    warningDiv.style.display = 'none';
    poolsDiv.style.display = 'block';
    
    const h1 = document.createElement('h1');
    poolsDiv.appendChild(h1).textContent = 'All Pools with average salary';

    const ulPool = document.createElement('ul');
    poolsDiv.appendChild(ulPool).classList.add('main-ul-pool');
    const mainUlPool = poolsDiv.querySelector('.main-ul-pool');

    for (let i = 0; i < rmDb.length; i++) {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      mainUlPool.appendChild(li).classList.add(`li${i}`);
  
      const liRm = mainUlPool.querySelectorAll('li');
      liRm.forEach(li => {
        li.appendChild(h3).textContent = 
          `POOL - ${rmDb[i].getPoolName()}, 
          Average Salary = ${Math.round(rmDb[i].getAverageSalary())}`;
      });
    }
  });

  warningBtn.addEventListener('click', () => {
    $('.warning').empty();
    employeesDiv.style.display = 'none';
    poolsDiv.style.display = 'none';
    warningDiv.style.display = 'block';

    const h1 = document.createElement('h1');
    warningDiv.appendChild(h1).textContent = 'Employees with salary less then average by pool';

    const ul = document.createElement('ul');
    warningDiv.appendChild(ul).classList.add('main-ul');
    const mainUl = warningDiv.querySelector('.main-ul');

    for (let i = 0; i < rmDb.length; i++) {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      mainUl.appendChild(li).classList.add(`li${i}`);

      const liRm = mainUl.querySelectorAll('li');
      const ulDevCreated = document.createElement('ul');
      liRm.forEach(li => {
        li.appendChild(h3).textContent = `POOL - ${rmDb[i].getPoolName()}`;
        li.appendChild(ulDevCreated).classList.add(`ulDev`);
      });
    }
    
    const ulDevQueryAll = warningDiv.querySelectorAll('.ulDev');
    ulDevQueryAll.forEach((ul, i) => {
      for (let j = 0; j < rmDb[i].getWarning().length; j++) {
        const liDev = document.createElement('li');
        ul.appendChild(liDev).textContent = `${rmDb[i].getWarning()[j].getName()}`;
      }
    });
  });
});