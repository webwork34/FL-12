const container = document.querySelector('.container');
let btnsEdit, btnsDelete, posts;

function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
}

function closeModal() {
document.getElementById('modal').style.display = 'none';
document.getElementById('fade').style.display = 'none';
}

function getPosts(callBack){
  openModal();
  const  xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      closeModal();
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        callBack(response);
      });
    }
  };

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
}

function render(response){
  response.reverse().forEach((user, index) => {
    container.insertAdjacentHTML('afterbegin', `
    <div class="card">
        <h2 class="user-id">ID ${user.id}</h2>
        <img src="https://yt3.ggpht.com/a/AGF-l79SlmVLIQyPN8O35D98NCgnKb6wWMX7p-hYTw=s900-c-k-c0xffffffff-no-rj-mo" alt="cat" class="cat">
        <div class="card-body">
            <p class="user-name"> 
            <label for="userName${index}">1. <a href="./coments_posts.html" class="posts"><span>Name:</span></a></label>
              <input id="userNname${index}" type="text" value="${user.name}" class="userName" disabled>
            </p>
            <p class="user-userName">
                <label for="userUserName${index}">2. <span>Username:</span></label>
                <input id="userUserName${index}" type="text" value="${user.username}" class="userUserName" disabled>
            </p>
            <p class="user-email">
                <label for="userEmail${index}">3. <span>E-mail:</span></label>
                <input id="userEmail${index}" type="mail" value="${user.email}" class="userEmail" disabled>
            </p>
    
            <div class="address">
              <h3 class="address-header">Address</h3>
              <p class="user-street">
                <label for="userStreet${index}">4. <span>Street:</span></label>
                <input id="userStreet${index}" type="text" value="${user.address.street}" class="userStreet" disabled>
              </p>
              <p class="address-suite">
                <label for="userSuite${index}">5. <span>Suite:</span></label>
                <input id="userSuite${index}" type="text" value="${user.address.suite}" class="userSuite" disabled>
              </p>
              <p class="address-city">
                <label for="userCity${index}">6. <span>City:</span></label>
                <input id="userCity${index}" type="text" value="${user.address.city}" class="userCity" disabled>
              </p>
              <p class="address-zipcode">
                <label for="userZipcode${index}">7. <span>Zip code:</span></label>
                <input id="userZipcode${index}" type="text" value="${user.address.zipcode}" class="userZipcode" disabled>
              </p>
    
              <div class="geo">
                <h3 class="geo-header">Geo</h3>
                <p class="geo-lat">
                  <label for="geoLat${index}">8. <span>Lat:</span></label>
                  <input id="geoLat${index}" type="text" value="${user.address.geo.lat}" class="geoLat" disabled>
                </p>
                <p class="geo-lng">
                  <label for="geoLng${index}">9. <span>Lng:</span></label>
                  <input id="geoLng${index}" type="text" value="${user.address.geo.lng}" class="geoLng" disabled>
                </p>
              </div>
            </div>
            
            <p class="user-phone">
              <label for="userPhone${index}">10. <span>Phone:</span></label>
              <input id="userPhone${index}" type="tel" value="${user.phone}" class="userPhone" disabled>
            </p>
            <p class="user-website">
                <label for="useWebsite${index}">11. <span>Website:</span></label>
                <input id="useWebsite${index}" type="url" value="${user.website}" class="userWebsite" disabled>
            </p>
    
            <div class="company">
                <h3 class="company-header">Company</h3>
                <p class="company-name">
                  <label for="companyName${index}">12. <span>Company name:</span></label>
                  <input id="companyName${index}" type="url" value="${user.company.name}" class="companyName" disabled>
                </p>
                <p class="company-catchPhrase">
                  <label for="companyCatchPhrase${index}">13. <span>Company catch phrase:</span></label>
                  <input id="companyCatchPhrase${index}" type="url" value="${user.company.catchPhrase}" class="companyCatchPhrase" disabled>
                </p>
                <p class="company-bs">
                  <label for="companyBs${index}">14. <span>Company bs:</span></label>
                  <input id="companyBs${index}" type="url" value="${user.company.bs}" class="companyBs" disabled>
                </p>
            </div>
          </div>
        <button class="edit">Edit user</button>
        <button class="delete">Delete user</button>
      </div>
    `);
  });
  btnsEdit = document.querySelectorAll('.edit');
  btnsDelete = document.querySelectorAll('.delete');
  posts = document.querySelectorAll('.posts');

  posts.forEach((post, index) => {
    post.addEventListener('click', function(){
      localStorage.setItem('index', index + 1);
    });

  });

  btnsEdit.forEach(btn => {
    btn.addEventListener('click', editFun);
  });

  function editFun(){
    const inputs = this.closest('.card').querySelectorAll('input');
    inputs.forEach(input => {
      input.disabled = false;
    });

    if(this.textContent = 'Edit user'){
      this.textContent = 'Save changes';
      this.removeEventListener('click', editFun);
      this.addEventListener('click', saveChanges);
    }
  }

  function saveChanges(){
    const inputs = this.closest('.card').querySelectorAll('input');
    inputs.forEach(input => {
      input.disabled = true;
    });

    const index = parseInt(this.closest('.card').querySelector('.user-id').textContent.match(/\d+/));
    const userNameEdited = this.closest('.card').querySelector('.userName').value;
    const userUserNameEdited = this.closest('.card').querySelector('.userUserName').value;
    const userEmailEdited = this.closest('.card').querySelector('.userEmail').value;
    const userStreetEdited = this.closest('.card').querySelector('.userStreet').value;
    const userSuiteEdited = this.closest('.card').querySelector('.userSuite').value;
    const userCityEdited = this.closest('.card').querySelector('.userCity').value;
    const userZipcodeEdited = this.closest('.card').querySelector('.userZipcode').value;
    const geoLatEdited = this.closest('.card').querySelector('.geoLat').value;
    const geoLngEdited = this.closest('.card').querySelector('.geoLng').value;
    const userPhoneEdited = this.closest('.card').querySelector('.userPhone').value;
    const userWebsiteEdited = this.closest('.card').querySelector('.userWebsite').value;
    const companyNameEdited = this.closest('.card').querySelector('.companyName').value;
    const companyCatchPhraseEdited = this.closest('.card').querySelector('.companyCatchPhrase').value;
    const companyBsEdited = this.closest('.card').querySelector('.companyBs').value;
  
    openModal();
    fetch(`https://jsonplaceholder.typicode.com/users/${index}`, {
      method: 'PUT',
      body: JSON.stringify({
        
        name: userNameEdited,
        username: userUserNameEdited,
        email: userEmailEdited,
        address: {
          street: userStreetEdited,
          suite: userSuiteEdited,
          city: userCityEdited,
          zipcode: userZipcodeEdited,
          geo: {
            lat: geoLatEdited,
            lng: geoLngEdited
          }
        },
        phone: userPhoneEdited,
        website: userWebsiteEdited,
        company: {
          name: companyNameEdited,
          catchPhrase: companyCatchPhraseEdited,
          bs: companyBsEdited
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));

    closeModal();

    if(this.textContent = 'Save changes'){
      this.textContent = 'Edit user';
      this.removeEventListener('click', saveChanges);
      this.addEventListener('click', editFun);
    }
  }

  btnsDelete.forEach((btn, index) => {
    btn.addEventListener('click', function(){
      openModal();
      fetch(`https://jsonplaceholder.typicode.com/users/${index + 1}`, {
        method: 'DELETE'
      });
      closeModal();
      this.closest('.card').remove();
    });
  });
}

getPosts(render);