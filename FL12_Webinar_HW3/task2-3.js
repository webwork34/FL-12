class Employee{
  static EMPLOYEES = [];

  constructor(firstName, lastName, birthday, salary, department, position){
    this.employees = true;
    if(Employee.EMPLOYEES.length === 0){
      this.id = 0;
    }else{
      this.id = Employee.EMPLOYEES[Employee.EMPLOYEES.length - 1].id + 1;
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.salary = salary;
    this.position = position;
    this.department = department;
    Employee.EMPLOYEES.push(this);
  }
  
  get age(){
    return parseInt((Date.now() - new Date(this.birthday).getTime()) / (1000 * 60 * 60 * 24 * 365));
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  quite(){
    if(this.employees === true){
      let idRemove;
      Employee.EMPLOYEES.findIndex((el,index) => {
        if(this.id === el.id){
          idRemove = index;
        }
      });
      Employee.EMPLOYEES.splice(idRemove, 1);
      this.employees = false;
    }else{
      throw new Error('This employee has already deleted');
    }
  }

  retire(){ 
    this.quite();
    console.log('It was such a pleasure to work with you!');
  }

  getFired(){ 
    this.quite();
    console.log('Not a big deal!');
  }

  changeDepartment(newDepartment){
    this.department = newDepartment;
  }
  changePosition(newPosition){
    this.position = newPosition;
  }
  changeSalary(newSalary){
    this.salary = newSalary;
  }

  getPromoted(benefits){
    for (const key in benefits) {
      if (this.hasOwnProperty(key)) {
        this[key] = benefits[key];
      }
    }
    console.log('Yoohooo');
  }

  getDemoted(punishment){
    for (const key in punishment) {
      if (this.hasOwnProperty(key)) {
        this[key] = punishment[key];
      }
    }
    console.log('Damn');
  }
}


class Manager extends Employee{
  constructor(firstName, lastName, birthday, salary, department){
    super(firstName, lastName, birthday, salary, department);
    this.position = 'Manager';
  }

  get managedEmployees(){
    const selectManagers = Employee.EMPLOYEES.filter(el => {
      if(el instanceof Manager && el.department === this.department){
        return el;
      }
    });
    return selectManagers;
  }
}


class BlueCollarWorker extends Employee{
  constructor(firstName, lastName, birthday, salary, department, position){
    super(firstName, lastName, birthday, salary, department, position);
  }
}


class HRManager extends Manager{
  constructor(firstName, lastName, birthday, salary){
    super(firstName, lastName, birthday, salary);
    this.department = 'HR';
  }
}


class SalesManager extends Manager{
  constructor(firstName, lastName, birthday, salary){
    super(firstName, lastName, birthday, salary);
    this.department = 'SALES';
  }
}

const man1 = new Employee('name1', 'surname1', '06/15/1985', 1000, 'IT', 'junior');
const man2 = new Employee('name2', 'surname2', '10/18/1980', 2000, 'IT', 'middle');
const man3 = new Employee('name2', 'surname3', '07/27/1990', 8000, 'SALES', 'senior');
const manager1 = new Manager('Kolya', 'Sidorov', '11/26/1985', 3000, 'IT');
const manager2 = new Manager('Andrey', 'Petrov', '08/11/1980', 2000, 'IT');
const manager3 = new Manager('Sergey', 'Ivanov', '05/18/1990', 800, 'SALES');
const manager4 = new Manager('name4', 'surname4', '10/20/1992', 600, 'IT');
const manager5 = new Manager('name5', 'surname5', '01/09/1983', 1500, 'SHOP');
const manager6 = new Manager('name6', 'surname6', '12/30/1995', 1100, 'CALL');
const hrManager = new HRManager('name7', 'surname7', '03/03/1985', 1000);
const salesManager = new SalesManager('name8', 'surname8', '08/14/1990', 800);



//----------------------------------task 3-----------------------------------
const managedAbility = (state) => ({
  get managedEmployees(){
    const selectManagers = Employee.EMPLOYEES.filter(el => {
      if(el instanceof Manager && el.department === state.department){
        return el;
      }
    });
    return selectManagers;
  }
});

function ManagerPro(firstName, lastName, birthday, salary, department){
  let manager = {
    firstName, 
    lastName, 
    birthday, 
    salary, 
    department,
    position: 'Manager'
  };
  return Object.assign(
    manager,
    managedAbility(manager)
  );
}

const newManager = ManagerPro('name9', 'surname9', '05/15/1990', 1200, 'IT');