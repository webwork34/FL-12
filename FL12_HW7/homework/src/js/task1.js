let email = prompt('Enter your e-mail:', '');
let password, change, confirmPassword, account;
const minEmailLength = 5,
      newPassLength = 6;

let user = {
  mail: 'user@gmail.com',
  password: 'UserPass'
};
let admin = {
  mail: 'admin@gmail.com',
  password: 'AdminPass'
};

if(email === null || email.trim().length === 0){
  alert('Canceled.');
}else if(email.length < minEmailLength){
  alert("I don't know any emails having name length less than 5 symbols");
}else if(email === user.mail || email === admin.mail){
  account = email === user.mail ? user : admin;
  password = prompt('Enter your password:', '');
  if(password === null || password.trim().length === 0){
    alert('Canceled.');
  }else if(password === account.password && email === account.mail){
    change = confirm('Do you want to change your password?');
    if(!change){
      alert('You have failed the change.');
    }else{
      password = prompt('Write the old password:');
      if(password === null || password.trim().length === 0){
        alert('Canceled.');
      }else if(password === account.password){
        password = prompt('Write the new password:');
        if(password === null || password.trim().length === 0){
          alert('Canceled.');
        }else if(password.length < newPassLength){
          alert('It’s too short password. Sorry.');
        }else{
          confirmPassword = prompt('Confirm new password:');
          if(password !== confirmPassword){
            alert('You wrote the wrong password.');
          }else{
            account.password = confirmPassword;
            alert('You have successfully changed your password.');
          }
        }
      }else{
        alert('Wrong password');
      }
    }
  }else{
    alert('Wrong password');
  }
}else{
  alert('I don’t know you');
}